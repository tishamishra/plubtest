// ========================================
// MULTIPLE LOCATION DATA EXTRACTION SCRIPT
// Run this in browser console to extract data from multiple pages
// ========================================

(function() {
  'use strict';
  
  console.log('🚀 Multiple Location Data Extraction Tool');
  console.log('==========================================');
  
  // Function to extract data from current page
  function extractCurrentPageData() {
    const locationInfo = extractLocationInfo();
    const neighborhoods = extractNeighborhoods();
    const zipCodes = extractZipCodes();
    const phoneNumber = extractPhoneNumber();
    
    return {
      id: locationInfo.city.toLowerCase().replace(/\s+/g, '-'),
      name: locationInfo.city,
      state: locationInfo.state,
      fullName: `${locationInfo.city}, ${locationInfo.state}`,
      phone: phoneNumber,
      areas: neighborhoods,
      zipCodes: zipCodes,
      extractedAt: new Date().toISOString()
    };
  }
  
  // Helper functions (same as single extraction script)
  function extractNeighborhoods() {
    const neighborhoods = [];
    const neighborhoodLinks = document.querySelectorAll('a[href*="google.com/maps/search"]');
    
    neighborhoodLinks.forEach(link => {
      const text = link.textContent.trim();
      if (text && text.length > 0 && text.length < 50) {
        neighborhoods.push(text);
      }
    });
    
    return [...new Set(neighborhoods)];
  }
  
  function extractZipCodes() {
    const zipCodes = [];
    const zipPattern = /\b\d{5}\b/g;
    const pageText = document.body.textContent;
    const matches = pageText.match(zipPattern);
    
    if (matches) {
      zipCodes.push(...new Set(matches));
    }
    
    return zipCodes;
  }
  
  function extractLocationInfo() {
    let city = '';
    let state = '';
    
    const url = window.location.href;
    const urlMatch = url.match(/\/([^\/]+)-([a-z]{2})/i);
    
    if (urlMatch) {
      city = urlMatch[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      state = urlMatch[2].toUpperCase();
    } else {
      const title = document.title;
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      
      const textToSearch = [title, h1?.textContent, h2?.textContent].filter(Boolean).join(' ');
      const locationMatch = textToSearch.match(/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*),\s*([A-Z]{2})/);
      if (locationMatch) {
        city = locationMatch[1];
        state = locationMatch[2];
      }
    }
    
    return { city, state };
  }
  
  function extractPhoneNumber() {
    const phonePattern = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
    const pageText = document.body.textContent;
    const matches = pageText.match(phonePattern);
    
    return matches ? matches[0] : '';
  }
  
  // Get existing data from localStorage or start fresh
  let allLocations = JSON.parse(localStorage.getItem('allExtractedLocations') || '[]');
  
  // Extract current page data
  const currentData = extractCurrentPageData();
  
  // Check if this location already exists
  const existingIndex = allLocations.findIndex(loc => loc.id === currentData.id);
  
  if (existingIndex !== -1) {
    // Update existing location
    allLocations[existingIndex] = currentData;
    console.log(`🔄 Updated existing location: ${currentData.name}, ${currentData.state}`);
  } else {
    // Add new location
    allLocations.push(currentData);
    console.log(`✅ Added new location: ${currentData.name}, ${currentData.state}`);
  }
  
  // Save to localStorage
  localStorage.setItem('allExtractedLocations', JSON.stringify(allLocations));
  
  // Display current page results
  console.log('\n📊 CURRENT PAGE DATA:');
  console.log('=====================');
  console.log('City:', currentData.name);
  console.log('State:', currentData.state);
  console.log('Phone:', currentData.phone);
  console.log('Neighborhoods found:', currentData.areas.length);
  console.log('Zip Codes found:', currentData.zipCodes.length);
  
  // Show first 10 neighborhoods
  console.log('\n🏘️ FIRST 10 NEIGHBORHOODS:');
  console.log(currentData.areas.slice(0, 10));
  
  // Show first 10 zip codes
  console.log('\n📮 FIRST 10 ZIP CODES:');
  console.log(currentData.zipCodes.slice(0, 10));
  
  // Show all neighborhoods (if not too many)
  if (currentData.areas.length <= 50) {
    console.log('\n🏘️ ALL NEIGHBORHOODS:');
    console.log(currentData.areas);
  } else {
    console.log('\n🏘️ ALL NEIGHBORHOODS (showing first 50):');
    console.log(currentData.areas.slice(0, 50));
    console.log(`... and ${currentData.areas.length - 50} more`);
  }
  
  // Show all zip codes (if not too many)
  if (currentData.zipCodes.length <= 50) {
    console.log('\n📮 ALL ZIP CODES:');
    console.log(currentData.zipCodes);
  } else {
    console.log('\n📮 ALL ZIP CODES (showing first 50):');
    console.log(currentData.zipCodes.slice(0, 50));
    console.log(`... and ${currentData.zipCodes.length - 50} more`);
  }
  
  // Display summary
  console.log('\n📈 TOTAL LOCATIONS COLLECTED:', allLocations.length);
  console.log('=====================================');
  allLocations.forEach((loc, index) => {
    console.log(`${index + 1}. ${loc.name}, ${loc.state} (${loc.areas.length} neighborhoods, ${loc.zipCodes.length} zip codes)`);
  });
  
  // Create control panel
  const controlPanel = document.createElement('div');
  controlPanel.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    background: #28a745;
    color: white;
    padding: 15px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    min-width: 250px;
  `;
  
  controlPanel.innerHTML = `
    <div style="margin-bottom: 10px; font-weight: bold;">📍 Location Data Collector</div>
    <div style="margin-bottom: 8px;">Current: ${currentData.name}, ${currentData.state}</div>
    <div style="margin-bottom: 8px;">Neighborhoods: ${currentData.areas.length}</div>
    <div style="margin-bottom: 8px;">Zip Codes: ${currentData.zipCodes.length}</div>
    <div style="margin-bottom: 8px;">Total: ${allLocations.length} locations</div>
    <button id="copyCurrentBtn" style="background: #28a745; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin-right: 5px; font-size: 12px;">📋 Copy Current</button>
    <button id="copyAllBtn" style="background: #007bff; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin-right: 5px; font-size: 12px;">📋 Copy All</button>
    <button id="clearAllBtn" style="background: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">🗑️ Clear All</button>
  `;
  
  document.body.appendChild(controlPanel);
  
  // Add event listeners
  document.getElementById('copyCurrentBtn').onclick = function() {
    const jsonData = JSON.stringify(currentData, null, 2);
    navigator.clipboard.writeText(jsonData).then(() => {
      this.textContent = '✅ Copied!';
      setTimeout(() => {
        this.textContent = '📋 Copy Current';
      }, 2000);
    });
  };
  
  document.getElementById('copyAllBtn').onclick = function() {
    const jsonData = JSON.stringify({ locations: allLocations }, null, 2);
    navigator.clipboard.writeText(jsonData).then(() => {
      this.textContent = '✅ Copied!';
      setTimeout(() => {
        this.textContent = '📋 Copy All';
      }, 2000);
    });
  };
  
  document.getElementById('clearAllBtn').onclick = function() {
    if (confirm('Are you sure you want to clear all collected data?')) {
      localStorage.removeItem('allExtractedLocations');
      allLocations = [];
      this.textContent = '✅ Cleared!';
      setTimeout(() => {
        this.textContent = '🗑️ Clear All';
        location.reload();
      }, 1000);
    }
  };
  
  console.log('\n🎯 INSTRUCTIONS:');
  console.log('================');
  console.log('1. Navigate to each location page on the competitor website');
  console.log('2. Run this script on each page');
  console.log('3. Use the control panel to copy all data when done');
  console.log('4. Paste the JSON into your locations.json file');
  
  return {
    currentData,
    allLocations,
    totalCount: allLocations.length
  };
})(); 