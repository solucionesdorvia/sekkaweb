"""
Crop the SEKKA master logo into individual brand assets.
Source: 1024x1024 PNG of the full logo lockup on black.
Output: separate PNGs for wordmark, emblem, tagline, and a tighter lockup —
each one with the black background extracted to alpha (luma-key) so the
artwork floats cleanly on any background.
"""
from pathlib import Path
from PIL import Image

SRC = Path(
    "/Users/valentindoroszuk/.cursor/projects/Users-valentindoroszuk-sekkaweb/"
    "assets/sekka-1e7f479a-cbe3-4d24-9db5-104419439ba1.png"
)
OUT = Path("/Users/valentindoroszuk/sekkaweb/public/brand")
OUT.mkdir(parents=True, exist_ok=True)


def luma_key(im: Image.Image, black=28, white=170) -> Image.Image:
    """Replace alpha channel using a luminance keyer with explicit black/white
    points. Pixels at or below `black` luminance go fully transparent;
    pixels at or above `white` go fully opaque; in-between is linear.
    This eliminates the visible rectangle around the original artwork while
    keeping antialiased gold edges crisp.
    """
    rgba = im.convert("RGBA")
    pixels = rgba.load()
    w, h = rgba.size
    span = max(1, white - black)
    for y in range(h):
        for x in range(w):
            r, g, b, _ = pixels[x, y]
            lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
            t = (lum - black) / span
            if t <= 0:
                a = 0
            elif t >= 1:
                a = 255
            else:
                a = int(t * 255)
            pixels[x, y] = (r, g, b, a)
    return rgba


img = Image.open(SRC).convert("RGBA")
W, H = img.size
print(f"source: {W}x{H}")

# Crops are (left, top, right, bottom).
# Coordinates calibrated visually from the 1024x1024 master.
crops = {
    # Full master, untouched
    "sekka-master.png": (0, 0, W, H),
    # Tight lockup — wordmark + emblem + tagline, minimal black margin
    "sekka-lockup.png": (40, 320, 984, 800),
    # Just the wordmark "SEKKA" — generous padding for S and A descenders
    "sekka-wordmark.png": (55, 335, 970, 578),
    # Just the citrus emblem (no flanking lines)
    "sekka-emblem.png": (420, 575, 605, 725),
    # Just the tagline DESHIDRATADOS ARTESANALES
    "sekka-tagline.png": (155, 728, 870, 792),
    # Emblem with flanking lines (the divider element)
    "sekka-divider.png": (60, 595, 965, 715),
}

# Master keeps the original black bg (used as packshot, OG, etc.)
keep_bg = {"sekka-master.png", "sekka-lockup.png"}

for name, box in crops.items():
    crop = img.crop(box)
    if name not in keep_bg:
        crop = luma_key(crop)
    crop.save(OUT / name, "PNG", optimize=True)
    print(f"  → {name:28s} {crop.size[0]}x{crop.size[1]}")

print("done")
