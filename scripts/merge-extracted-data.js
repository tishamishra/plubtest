// ========================================
// LOCATION DATA MERGE SCRIPT
// Use this to merge extracted data with existing locations.json
// ========================================

// Paste your extracted data here (from the browser console)
const extractedData = {
  "locations": [
    {
      "id": "houston",
      "name": "Houston",
      "state": "TX",
      "fullName": "Houston, TX", 
      "phone": "(888) 416-7894",
      "areas": ["Downtown", "Midtown", "Heights", "River Oaks"],
      "zipCodes": ["77001", "77002", "77003", "77004"],
      "extractedAt": "2024-01-15T10:30:00.000Z"
    }
    // Add more extracted locations here
  ]
};

// Template for new locations (copy from existing location)
const locationTemplate = {
  "description": "Best Licensed & Certified Plumbers in [CITY]. Trusted plumbing experts in [CITY], [STATE]. Licensed, experienced, and affordable for repairs, installs, or maintenance!",
  "heroTitle": "Best Licensed & Certified Plumbers in [CITY]",
  "heroSubtitle": "Call Us at [PHONE]! Trusted plumbing experts in [CITY], [STATE]. Licensed, experienced, and affordable for repairs, installs, or maintenance!",
  "services": [
    {
      "title": "Water Heaters Repair and Installation",
      "description": "Expert repair and installation of water heaters for homes and businesses in [CITY], [STATE], ensuring efficient performance and long-term reliability.",
      "icon": "🔥"
    },
    {
      "title": "Tankless Water Heaters Installation", 
      "description": "Energy-efficient tankless water heater services in [CITY], [STATE], providing endless hot water and reduced energy costs for homes and businesses.",
      "icon": "⚡"
    },
    {
      "title": "Water Recirculation Pumps Repair",
      "description": "Water recirculation pump installation and repair in [CITY], [STATE], offering instant hot water and improving water usage efficiency.",
      "icon": "🔄"
    },
    {
      "title": "Faucets & Sinks Repair & Replacement",
      "description": "Installation and repair of faucets and sinks in [CITY], [STATE], ensuring leak-free performance and enhancing the functionality of your space.",
      "icon": "🚰"
    },
    {
      "title": "Water Conservation System",
      "description": "Water-saving plumbing solutions for eco-friendly homes in [CITY], [STATE], helping reduce consumption and lower utility bills.",
      "icon": "🌱"
    },
    {
      "title": "Bathroom Remodeling Solutions",
      "description": "Complete bathroom remodeling services in [CITY], [STATE], transforming outdated spaces into modern, functional bathrooms.",
      "icon": "🚿"
    },
    {
      "title": "Water Systems Repair & Installation",
      "description": "Water system installation and maintenance in [CITY], [STATE], ensuring clean, safe, and reliable water supply for residential and commercial properties.",
      "icon": "💧"
    },
    {
      "title": "Slab Leaks Repair & Detection",
      "description": "Slab leak detection and repair services in [CITY], [STATE], preventing water damage and maintaining the integrity of your property.",
      "icon": "🔍"
    },
    {
      "title": "Sump Pump Installation & Repair",
      "description": "Sump pump installation and maintenance in [CITY], [STATE], protecting homes from flooding with reliable and efficient systems.",
      "icon": "🛠️"
    },
    {
      "title": "Drain Cleaning",
      "description": "Drain cleaning services for clogged pipes in [CITY], [STATE], ensuring smooth water flow and preventing blockages.",
      "icon": "🧹"
    },
    {
      "title": "Drain Repair",
      "description": "Drain repair services to prevent leaks and backups in [CITY], [STATE], ensuring a reliable plumbing system for your property.",
      "icon": "🔧"
    },
    {
      "title": "Sewer Line Inspection & Replacement",
      "description": "Sewer line inspection, repair, and replacement in [CITY], [STATE], maintaining efficient waste disposal and preventing system failures.",
      "icon": "🏗️"
    },
    {
      "title": "Gas Line Installation & Replacement",
      "description": "Gas line installation and repair services in [CITY], [STATE], ensuring safe, compliant, and reliable gas supply for homes and businesses.",
      "icon": "⛽"
    },
    {
      "title": "Leak Detection and Repair",
      "description": "Accurate leak detection and repair services in [CITY], [STATE], using advanced technology to find and fix hidden leaks efficiently.",
      "icon": "🔍"
    },
    {
      "title": "Toilet Repair",
      "description": "Toilet repair and installation services in [CITY], [STATE], providing quick and reliable solutions for all toilet-related plumbing needs.",
      "icon": "🚽"
    }
  ]
};

// Function to merge extracted data with template
function mergeLocationData(extractedLocation) {
  const template = JSON.parse(JSON.stringify(locationTemplate));
  
  // Replace placeholders with actual data
  const description = template.description
    .replace(/\[CITY\]/g, extractedLocation.name)
    .replace(/\[STATE\]/g, extractedLocation.state);
    
  const heroTitle = template.heroTitle
    .replace(/\[CITY\]/g, extractedLocation.name);
    
  const heroSubtitle = template.heroSubtitle
    .replace(/\[CITY\]/g, extractedLocation.name)
    .replace(/\[STATE\]/g, extractedLocation.state)
    .replace(/\[PHONE\]/g, extractedLocation.phone);
  
  // Update services descriptions
  const services = template.services.map(service => ({
    ...service,
    description: service.description
      .replace(/\[CITY\]/g, extractedLocation.name)
      .replace(/\[STATE\]/g, extractedLocation.state)
  }));
  
  return {
    ...extractedLocation,
    description,
    heroTitle,
    heroSubtitle,
    services
  };
}

// Process all extracted locations
const mergedLocations = extractedData.locations.map(mergeLocationData);

// Output the merged data
console.log('🔄 MERGED LOCATION DATA:');
console.log('========================');
console.log(JSON.stringify({ locations: mergedLocations }, null, 2));

// Instructions
console.log('\n📋 INSTRUCTIONS:');
console.log('================');
console.log('1. Copy the JSON output above');
console.log('2. Open src/data/locations.json');
console.log('3. Add the new locations to the "locations" array');
console.log('4. Save the file');
console.log('5. Test the new location pages on your website');

module.exports = { mergeLocationData, mergedLocations }; 