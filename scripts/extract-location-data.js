// ========================================
// LOCATION DATA EXTRACTION SCRIPT
// Run this in browser console on competitor's location pages
// ========================================

(function() {
  'use strict';
  
  console.log('🔍 Starting Location Data Extraction...');
  
  // Function to extract neighborhoods from accordion
  function extractNeighborhoods() {
    const neighborhoods = [];
    
    // Look for neighborhood accordion content
    const neighborhoodLinks = document.querySelectorAll('a[href*="google.com/maps/search"]');
    
    neighborhoodLinks.forEach(link => {
      const text = link.textContent.trim();
      if (text && text.length > 0 && text.length < 50) { // Filter out long text
        neighborhoods.push(text);
      }
    });
    
    return [...new Set(neighborhoods)]; // Remove duplicates
  }
  
  // Function to extract zip codes
  function extractZipCodes() {
    const zipCodes = [];
    
    // Look for zip code patterns (5 digits)
    const zipPattern = /\b\d{5}\b/g;
    const pageText = document.body.textContent;
    const matches = pageText.match(zipPattern);
    
    if (matches) {
      zipCodes.push(...new Set(matches)); // Remove duplicates
    }
    
    return zipCodes;
  }
  
  // Function to extract city and state from URL or page
  function extractLocationInfo() {
    let city = '';
    let state = '';
    
    // Try to get from URL first
    const url = window.location.href;
    const urlMatch = url.match(/\/([^\/]+)-([a-z]{2})/i);
    
    if (urlMatch) {
      city = urlMatch[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      state = urlMatch[2].toUpperCase();
    } else {
      // Try to extract from page title or headings
      const title = document.title;
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      
      const textToSearch = [title, h1?.textContent, h2?.textContent].filter(Boolean).join(' ');
      
      // Look for city, state pattern
      const locationMatch = textToSearch.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*),\s*([A-Z]{2})/);
      if (locationMatch) {
        city = locationMatch[1];
        state = locationMatch[2];
      }
    }
    
    return { city, state };
  }
  
  // Function to extract phone number
  function extractPhoneNumber() {
    const phonePattern = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
    const pageText = document.body.textContent;
    const matches = pageText.match(phonePattern);
    
    return matches ? matches[0] : '';
  }
  
  // Function to extract service areas (other cities)
  function extractServiceAreas() {
    const serviceAreas = [];
    
    // Look for service area links or city mentions
    const links = document.querySelectorAll('a[href*="location"], a[href*="city"]');
    
    links.forEach(link => {
      const text = link.textContent.trim();
      if (text && text.length > 0 && text.length < 30 && !text.includes('http')) {
        serviceAreas.push(text);
      }
    });
    
    return [...new Set(serviceAreas)];
  }
  
  // Main extraction function
  function extractAllData() {
    const locationInfo = extractLocationInfo();
    const neighborhoods = extractNeighborhoods();
    const zipCodes = extractZipCodes();
    const phoneNumber = extractPhoneNumber();
    const serviceAreas = extractServiceAreas();
    
    const extractedData = {
      id: locationInfo.city.toLowerCase().replace(/\s+/g, '-'),
      name: locationInfo.city,
      state: locationInfo.state,
      fullName: `${locationInfo.city}, ${locationInfo.state}`,
      phone: phoneNumber,
      areas: neighborhoods,
      zipCodes: zipCodes,
      serviceAreas: serviceAreas,
      extractedAt: new Date().toISOString()
    };
    
    return extractedData;
  }
  
  // Execute extraction
  const data = extractAllData();
  
  // Display results
  console.log('📊 EXTRACTED DATA:');
  console.log('==================');
  console.log('City:', data.name);
  console.log('State:', data.state);
  console.log('Phone:', data.phone);
  console.log('Neighborhoods found:', data.areas.length);
  console.log('Zip codes found:', data.zipCodes.length);
  console.log('Service areas found:', data.serviceAreas.length);
  
  console.log('\n🏘️ NEIGHBORHOODS:');
  console.log(data.areas);
  
  console.log('\n📮 ZIP CODES:');
  console.log(data.zipCodes);
  
  console.log('\n🌍 SERVICE AREAS:');
  console.log(data.serviceAreas);
  
  // Create JSON for easy copying
  const jsonData = JSON.stringify(data, null, 2);
  
  console.log('\n📋 JSON FOR COPYING:');
  console.log('====================');
  console.log(jsonData);
  
  // Create a copy-to-clipboard button
  const copyButton = document.createElement('button');
  copyButton.textContent = '📋 Copy JSON to Clipboard';
  copyButton.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  `;
  
  copyButton.onclick = function() {
    navigator.clipboard.writeText(jsonData).then(() => {
      copyButton.textContent = '✅ Copied!';
      setTimeout(() => {
        copyButton.textContent = '📋 Copy JSON to Clipboard';
      }, 2000);
    });
  };
  
  document.body.appendChild(copyButton);
  
  // Store data in localStorage for later use
  localStorage.setItem('extractedLocationData', jsonData);
  
  console.log('\n💾 Data also saved to localStorage as "extractedLocationData"');
  console.log('🎯 Extraction complete! Use the copy button or copy the JSON above.');
  
  return data;
})(); 