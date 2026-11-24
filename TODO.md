# To do

Open tasks for the Rare Input website. Tick them off as they are done.

## Before launch

- [ ] **Contact form email.** The form cannot send mail yet. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (a verified sender) in Vercel. Optional: `CONTACT_TO_EMAIL`.
- [ ] **Connect the domain.** Point `rareinput.com` at Vercel, then set `NEXT_PUBLIC_SITE_URL` so the sitemap, canonical links and structured data use the real address.
- [ ] **Confirm the email address.** `hello@rareinput.com` is a guess. Check it exists, or change it in `src/lib/site.ts`.
- [ ] **Analytics and Search Console.** Add Google Analytics 4 (needs the measurement ID), verify the site in Search Console, and track contact form submissions as a conversion.
- [ ] **Privacy policy.** The contact form collects names and emails. Draft a policy page and link it in the footer. Have it checked by a lawyer.
- [ ] **Read the draft copy.** These lines are placeholder wording: the pricing answer on the home page FAQ, "usually within two working days" on the contact form, and the "Who we are not for" list on the About page.

## Soon

- [ ] **Social preview image.** Links shared on LinkedIn, WhatsApp and Facebook show no image. Needs an image (1200 x 630) and the Open Graph and Twitter card tags.
- [ ] **About page: a real person.** Add the founder's name, photo and a short bio.
- [ ] **WhatsApp button.** Add a chat button, with the number to use.
- [ ] **Case study results.** Add real numbers to the Clean & Conscious Care page if there are any (pages indexed, rankings, orders). Also confirm whether the store has launched, whether the Conversions API is now working, and that Charu is happy with how the Meta policy work is described.

## Later

- [ ] **Visible social links.** LinkedIn, Facebook and Instagram are in the structured data only. Add footer links, starting with LinkedIn, once the profiles have content.
- [ ] **Second case study**, and real testimonials once there are some.
- [ ] **Blog**, to put the content SEO service into practice.
- [ ] **Booking link** (for example Cal.com) for audit calls.
- [ ] **301 redirects** if any pages are renamed or moved. Do not redirect missing pages to the home page.

## Done

- [x] Home, services (9), work, about and contact pages
- [x] Case study: Clean & Conscious Care
- [x] Breadcrumb and organization structured data (LinkedIn, Facebook, Instagram)
- [x] Logo and favicon
- [x] Branded 404 page
- [x] Sitemap and robots file
