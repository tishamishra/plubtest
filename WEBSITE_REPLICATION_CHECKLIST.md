# 🏗️ **PLUMBING WEBSITE REPLICATION CHECKLIST**
*Complete A-Z Guide to Build 50+ Plumbing/Roofing Websites in 2 Hours*

## 📋 **PRE-DEVELOPMENT CHECKLIST**

### **1. Domain & Branding Setup**
- [ ] Choose domain name (e.g., `yourcompany.com`)
- [ ] Register domain
- [ ] Set up Vercel account
- [ ] Connect GitHub repository
- [ ] Choose brand colors (primary, secondary, accent)
- [ ] Create logo (or use placeholder)
- [ ] Define company name and tagline

### **2. Content Planning**
- [ ] List 15 main services (plumbing/roofing specific)
- [ ] Create 50-100 location names for subdomains
- [ ] Write company description and mission
- [ ] Prepare FAQ content (10-15 questions)
- [ ] Create testimonials (5-10 customer reviews)
- [ ] Define service areas and zip codes

---

## 🚀 **DEVELOPMENT CHECKLIST (2 HOURS)**

### **PHASE 1: Project Setup (15 minutes)**

#### **1.1 Initialize Next.js Project**
```bash
npx create-next-app@latest your-website-name --typescript --tailwind --eslint --app
cd your-website-name
```

#### **1.2 Install Dependencies**
```bash
npm install
```

#### **1.3 Create Project Structure**
```bash
mkdir -p src/data
mkdir -p src/components
mkdir -p src/app/locations/[location]
mkdir -p src/app/services
mkdir -p src/app/locations/[location]/[service]
mkdir -p src/app/locations/[location]/about
mkdir -p src/app/locations/[location]/contact
mkdir -p src/app/locations/[location]/services
```

### **PHASE 2: Core Configuration (20 minutes)**

#### **2.1 Update next.config.ts**
- [ ] Copy security headers configuration
- [ ] Set correct domain name
- [ ] Configure CSP for Google Maps and Analytics

#### **2.2 Create locations.json**
- [ ] Generate 50-100 location entries
- [ ] Include: id, name, state, fullName, description, phone, heroTitle, heroSubtitle
- [ ] Add services array (15 services)
- [ ] Include areas, zipCodes, image, meta, faqs, testimonials

#### **2.3 Setup Middleware**
- [ ] Copy middleware.ts for subdomain routing
- [ ] Update domain name
- [ ] Configure service slugs
- [ ] Set up www redirect

### **PHASE 3: Core Components (30 minutes)**

#### **3.1 Header Component**
- [ ] Copy Header.tsx
- [ ] Update phone number
- [ ] Update logo path
- [ ] Configure subdomain detection

#### **3.2 Footer Component**
- [ ] Copy Footer.tsx
- [ ] Update company information
- [ ] Update phone numbers
- [ ] Configure dynamic maps

#### **3.3 Layout Component**
- [ ] Copy layout.tsx
- [ ] Update metadata (title, description, keywords)
- [ ] Add Google Analytics
- [ ] Update favicon

### **PHASE 4: Main Pages (25 minutes)**

#### **4.1 Homepage**
- [ ] Copy page.tsx
- [ ] Update hero content
- [ ] Update service cards (15 services)
- [ ] Update testimonials
- [ ] Update FAQ section

#### **4.2 Services Page**
- [ ] Copy services/page.tsx
- [ ] Update service descriptions
- [ ] Update service images

#### **4.3 About Page**
- [ ] Copy about/page.tsx
- [ ] Update company story
- [ ] Update team information

#### **4.4 Contact Page**
- [ ] Copy contact/page.tsx
- [ ] Update contact information
- [ ] Update service areas

### **PHASE 5: Location Pages (20 minutes)**

#### **5.1 Location Homepage**
- [ ] Copy locations/[location]/page.tsx
- [ ] Update nearby locations logic
- [ ] Configure service card links

#### **5.2 Location Sub-pages**
- [ ] Copy about/page.tsx
- [ ] Copy contact/page.tsx
- [ ] Copy services/page.tsx
- [ ] Update location-specific content

### **PHASE 6: Service Pages (15 minutes)**

#### **6.1 Main Service Pages**
- [ ] Create 15 service pages in src/app/services/
- [ ] Copy service page template
- [ ] Update service-specific content

#### **6.2 Location Service Pages**
- [ ] Create location-specific service pages
- [ ] Update routing in middleware

### **PHASE 7: SEO & Sitemaps (10 minutes)**

#### **7.1 Sitemap Configuration**
- [ ] Copy sitemap.ts
- [ ] Copy sitemap-index.xml/route.ts
- [ ] Copy sitemap-locations.xml/route.ts
- [ ] Copy sitemap-services.xml/route.ts

#### **7.2 Robots.txt**
- [ ] Copy robots.ts
- [ ] Update sitemap URL

### **PHASE 8: Final Configuration (5 minutes)**

#### **8.1 Environment Variables**
- [ ] Set NEXT_PUBLIC_SITE_URL
- [ ] Configure Google Analytics ID
- [ ] Set up any API keys

#### **8.2 Testing**
- [ ] Test main domain
- [ ] Test subdomain routing
- [ ] Test sitemaps
- [ ] Test Google Maps
- [ ] Test mobile responsiveness

---

## 🎨 **CUSTOMIZATION CHECKLIST**

### **Design Customization**
- [ ] Update primary color (#1c7bc8 → your color)
- [ ] Update secondary colors
- [ ] Update logo and favicon
- [ ] Update hero images
- [ ] Update service icons

### **Content Customization**
- [ ] Update company name throughout
- [ ] Update phone numbers
- [ ] Update service descriptions
- [ ] Update location names
- [ ] Update testimonials
- [ ] Update FAQ content

### **Technical Customization**
- [ ] Update domain name in all files
- [ ] Update Google Analytics ID
- [ ] Update sitemap URLs
- [ ] Update middleware domain logic

---

## 🚀 **DEPLOYMENT CHECKLIST**

### **Pre-Deployment**
- [ ] Run `npm run build` locally
- [ ] Fix any build errors
- [ ] Test all pages locally
- [ ] Verify sitemaps work

### **Deployment**
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Configure domain in Vercel
- [ ] Set up SSL certificate
- [ ] Configure DNS settings

### **Post-Deployment**
- [ ] Test live website
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics
- [ ] Test all subdomains
- [ ] Check mobile responsiveness

---

## 📊 **QUALITY ASSURANCE CHECKLIST**

### **Functionality**
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Maps load properly
- [ ] Mobile menu works
- [ ] Subdomain routing works

### **SEO**
- [ ] All pages have proper titles
- [ ] Meta descriptions are unique
- [ ] Sitemaps are accessible
- [ ] Robots.txt is correct
- [ ] No broken links

### **Performance**
- [ ] Page load speed < 3 seconds
- [ ] Images are optimized
- [ ] No console errors
- [ ] Mobile-friendly

---

## 🎯 **SUCCESS METRICS**

### **Technical Metrics**
- ✅ Build time: < 2 minutes
- ✅ Deployment time: < 5 minutes
- ✅ Page load speed: < 3 seconds
- ✅ Mobile score: > 90
- ✅ SEO score: > 90

### **Business Metrics**
- ✅ All 15 services listed
- ✅ 50+ location pages created
- ✅ Contact forms working
- ✅ Google Maps functional
- ✅ Analytics tracking

---

## 📝 **NOTES**

### **Time Estimates**
- **Total Time:** 2 hours
- **Setup:** 15 minutes
- **Development:** 90 minutes
- **Testing:** 15 minutes

### **Key Files to Copy**
1. `next.config.ts` - Security headers
2. `src/middleware.ts` - Subdomain routing
3. `src/data/locations.json` - Location data
4. `src/components/Header.tsx` - Navigation
5. `src/components/Footer.tsx` - Footer
6. All page templates in `src/app/`

### **Common Issues to Avoid**
- ❌ Forgetting to update domain names
- ❌ Not updating phone numbers
- ❌ Missing Google Analytics setup
- ❌ Incorrect CSP configuration
- ❌ Broken subdomain routing

---

## 🎉 **COMPLETION CHECKLIST**

- [ ] Website loads without errors
- [ ] All subdomains work
- [ ] Google Maps functional
- [ ] Contact forms working
- [ ] Sitemaps accessible
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Analytics tracking
- [ ] Security headers active
- [ ] Ready for production

**🎯 GOAL: Complete website in 2 hours with 0 errors!**
