# Sport implementation

Sport IT/EN pages contain Tennis, Football and Chess cards and preserve the shared navigation and signatures. The homepage Sport card links to the overview; the existing Tennis files are unchanged. Football has a minimal IT/EN landing page to keep its card link usable.

## Outstanding before publication

- The approved conversation's mockup attachment was not accessible. The layout follows its written specification; visual equivalence to that image cannot be certified.
- The live Chess.com endpoint returned a Cloudflare challenge during verification from this environment. Verify successful live retrieval from the intended browser before publication. Failures display unavailable, never a made-up rating.

## Verification

Browser checks: Italian and English at 1440, 390 and 320 pixels, no horizontal overflow, all referenced card images loaded, three cards, mobile menu open/Escape. Shared rating tested with controlled responses for successful Rapid data, missing Rapid data and HTTP failure. The synthetic rating used by the test is not stored in site files.

The widget reads chess_rapid.last.rating from https://api.chess.com/pub/player/flurred19/stats on load, every five minutes while visible and when returning to the tab. It uses a ten-second timeout and clears the rating on errors. Chess.com may cache public API data; the label says latest available rating rather than implying immediate updates after every match.

## Generated background

Built-in imagegen output, converted to WebP: assets/sport-background.webp.
Prompt: photographic lush green football pitch with white field markings, yellow tennis balls and elegant stylized ivory and dark chess pieces along the lower and outer edges; natural evening light, uncluttered center for website cards; no people, text, interface, logos or watermark.

## Maradona Stadium photo

User-provided IMG_1162.jpeg is now used on both Sport cards and Football pages in IT/EN. EXIF orientation applied and an optimized 2048-pixel WebP created as assets/stadio-maradona.webp. Original source remains unchanged.
