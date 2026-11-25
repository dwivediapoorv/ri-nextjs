# To do

Open tasks for the Rare Input website. Tick them off as they are done.

## Before launch

- [ ] **Contact form email.** The form cannot send mail yet. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (a verified sender) in Vercel. Optional: `CONTACT_TO_EMAIL`.
- [ ] **Connect the domain.** Point `rareinput.com` at Vercel, then set `NEXT_PUBLIC_SITE_URL` so the sitemap, canonical links and structured data use the real address.
- [ ] **Confirm the email address.** `hello@rareinput.com` is a guess. Check it exists, or change it in `src/lib/site.ts`.
- [ ] **Analytics and Search Console.** Add Google Analytics 4 (needs the measurement ID), verify the site in Search Console, and track contact form submissions as a conversion.
- [ ] **Privacy policy and terms (drafted).** The pages are live at `/privacy` and `/terms`, linked in the footer and from the forms. Have a lawyer check both. Add the legal business name and registered address, confirm how long resumes and enquiries are kept, and update the privacy page when Google Analytics or any cookies are added.
- [ ] **Careers page.** The "Why work with us" points are draft wording: check each one is true of the studio, and change what is not. The resume form uses the same email settings as the contact form, so it works once `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` are set. Optional: `CAREERS_TO_EMAIL` to send applications to a different inbox. Resumes hold personal data, so mention them in the privacy policy.
- [ ] **Careers: team quotes.** The page has a "From the team" section that stays hidden until quotes are added (`quotes` in `src/app/careers/page.tsx`). Needs one or two real quotes, with name and role. Also confirm the "we only hire through this page and LinkedIn, and never ask for money" line, and check the "Freshers and interns" wording and the five benefits (flexible hours, remote or office, learning support, health insurance, performance bonus) match what you offer.
- [ ] **Careers: sign-up list.** The "Not ready to apply?" form emails each address to the careers inbox. There is no list or tool behind it yet, so keep the addresses somewhere and use them when roles open.
- [ ] **Read the draft copy.** These lines are placeholder wording: the pricing answer on the home page FAQ, "usually within two working days" on the contact form, and the "Who we are not for" list on the About page.

## Soon

- [ ] **Social preview image.** Links shared on LinkedIn, WhatsApp and Facebook show no image. Needs an image (1200 x 630) and the Open Graph and Twitter card tags.
- [ ] **WhatsApp button.** Add a chat button, with the number to use.
- [ ] **Clean & Conscious Care.** No numbers on this page, by choice. Confirm whether the Conversions API is now working (the page describes it as a plan), and that Charu is happy with how the Meta policy work is described. A one-line testimonial from Charu would help.
- [ ] **UPORTHOCON 2025 case study.** Confirm the Ghaziabad Orthopaedic Association is happy to be named. Check the wording: attendees sign up in the portal and payments are taken online. Add if available: the exact number of registrations (the page says around 750 doctors and 1,200 students), which payment gateway was used, anything tricky that was solved (for example different fees for members and non-members), and a screenshot of the registration page. The portal is down, so there is no live link.
- [ ] **The String Thing case study.** Confirm the school is happy to be named, and that the wording about booking a trial is right. Add if available: how many students use the app, whether students log in, how songs and tabs are added, and a screenshot of the app.

## Later

- [ ] **Better founder photo (optional).** The current one is a night street shot, cropped to head and shoulders. Replace `public/founder.webp` (square, at least 640 x 640) with a cleaner version.
- [ ] **Visible social links.** LinkedIn, Facebook and Instagram are in the structured data only. Add footer links, starting with LinkedIn, once the profiles have content.
- [ ] **More case studies**, and real testimonials once there are some.
- [ ] **Blog**, to put the content SEO service into practice.
- [ ] **Booking link** (for example Cal.com) for audit calls.
- [ ] **301 redirects** if any pages are renamed or moved. Do not redirect missing pages to the home page.

## Done

- [x] Home, services (9), work, about and contact pages
- [x] Careers page (footer link, resume form)
- [x] Case studies: Clean & Conscious Care, UPORTHOCON 2025, The String Thing
- [x] Breadcrumb and organization structured data (LinkedIn, Facebook, Instagram)
- [x] Logo and favicon
- [x] Branded 404 page
- [x] Founder bio on the About page (Noida, personal LinkedIn)
- [x] Sitemap and robots file
