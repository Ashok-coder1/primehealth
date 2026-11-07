PRIME HEALTH CARE CENTER – IMAGE GUIDE
=======================================

HOW IT WORKS
------------
Every photo on the website first tries to load a LOCAL file from this folder.
- If the local file is missing  -> a default online healthcare photo is shown.
- If that also fails            -> a teal gradient placeholder with an icon is shown.

To use your own photo, simply upload a file with EXACTLY the name below into the
right folder. No code changes are needed.

RULES
-----
* File names are case-sensitive on the server: use lowercase, exactly as written.
* Use .jpg for photos (.png only for the logo).
* Compress photos before uploading (e.g. https://squoosh.app or https://tinyjpg.com).
  Aim for under 300 KB per photo (hero/banners under 500 KB).
* Landscape = wider than tall. Portrait = taller than wide.


FOLDER / FILE NAME                      RECOMMENDED SIZE        NOTES
---------------------------------------------------------------------------------------
logo/logo.png                           512 x 512 px (or wide   Transparent PNG. Used in header,
                                        logo ~ 600 x 240 px)    footer (white circle) and as the
                                                                browser tab icon (favicon).
                                                                ALSO copy it to: maintenance/logo.png

hero/hero.jpg                           1920 x 1080 px          Home page full-width background.
                                        (landscape)             Keep the important part on the RIGHT;
                                                                text sits on the left.

about/about-1.jpg                       800 x 1000 px           Large photo in About section
                                        (portrait 4:5)          (doctor / team / building).
about/about-2.jpg                       600 x 600 px (square)   Small overlapping photo (lab / equipment).

services/opd.jpg                        1000 x 750 px (4:3)     General OPD Consultation
services/lab.jpg                        1000 x 750 px (4:3)     Pathology Laboratory
services/xray.jpg                       1000 x 750 px (4:3)     Digital X-Ray
services/usg.jpg                        1000 x 750 px (4:3)     Ultrasound (USG)
services/ecg.jpg                        1000 x 750 px (4:3)     ECG
services/medical.jpg                    1000 x 750 px (4:3)     Pre-Employment / Foreign Employment Medical

gallery/gallery-1.jpg                   1200 x 1200 px (square) Large tile – Our Care Team
gallery/gallery-2.jpg                   800 x 600 px            Pathology Lab
gallery/gallery-3.jpg                   800 x 600 px            Observation Room
gallery/gallery-4.jpg                   800 x 600 px            Sample Processing
gallery/gallery-5.jpg                   800 x 600 px            Hygienic & Safe
                                                                (Captions can be changed in index.html)

banners/services-banner.jpg             1920 x 700 px           Top banner on services.html
banners/contact-banner.jpg              1920 x 700 px           Top banner on contact.html

testimonials/                           (not used yet)          Reserved for patient photos if you
                                                                later want them on the review cards.


SOCIAL SHARING IMAGE
--------------------
When the site link is shared on Facebook/WhatsApp, hero/hero.jpg is used as the preview
image (see og:image in index.html – update the domain there after deployment).
