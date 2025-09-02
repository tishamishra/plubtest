import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import locationsData from '@/data/locations.json';

interface ServicePageProps {
  params: Promise<{
    location: string;
    service: string;
  }>;
}

// Service data with detailed information for all 15 services
const serviceData = {
  'plumber-water-heater-repair': {
    title: 'Water Heater Repair and Installation',
    shortTitle: 'Water Heater Services',
    description: 'Professional water heater repair and installation services',
    heroTitle: 'Expert Water Heater Repair & Installation',
    heroSubtitle: 'Fast, reliable water heater services for homes and businesses',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Traditional Tank Water Heater Installation',
      'Tankless Water Heater Installation',
      'Water Heater Repair & Maintenance',
      'Emergency Water Heater Services',
      'Water Heater Replacement',
      'Gas & Electric Water Heater Services'
    ],
    benefits: [
      '24/7 Emergency Service',
      'Licensed & Insured Technicians',
      'Free Estimates',
      'Warranty on All Work',
      'Same Day Service Available',
      'Competitive Pricing'
    ],
    content: [
      {
        title: 'Professional Water Heater Installation',
        description: 'Our expert technicians install all types of water heaters including traditional tank water heaters, tankless water heaters, and hybrid models. We ensure proper sizing, installation, and safety compliance for optimal performance and energy efficiency.'
      },
      {
        title: 'Comprehensive Water Heater Repair',
        description: 'We diagnose and repair all water heater issues including no hot water, insufficient hot water, strange noises, leaks, and pilot light problems. Our technicians are trained to work with all major brands and models.'
      },
      {
        title: 'Emergency Water Heater Services',
        description: 'When your water heater fails, we provide 24/7 emergency repair services. Our team responds quickly to restore hot water to your home or business, minimizing disruption to your daily routine.'
      },
      {
        title: 'Water Heater Maintenance',
        description: 'Regular maintenance extends the life of your water heater and prevents costly repairs. Our maintenance services include inspection, cleaning, testing, and adjustment of all components.'
      }
    ]
  },
  'plumber-tankless-water-heater': {
    title: 'Tankless Water Heater Installation',
    shortTitle: 'Tankless Water Heaters',
    description: 'Energy-efficient tankless water heater installation and repair',
    heroTitle: 'Tankless Water Heater Installation & Repair',
    heroSubtitle: 'Endless hot water with energy savings and space efficiency',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Tankless Water Heater Installation',
      'Tankless Water Heater Repair',
      'Gas & Electric Tankless Systems',
      'Whole House Tankless Installation',
      'Point-of-Use Tankless Units',
      'Tankless System Maintenance'
    ],
    benefits: [
      'Endless Hot Water Supply',
      'Energy Cost Savings',
      'Space-Saving Design',
      'Longer Lifespan',
      'Reduced Carbon Footprint',
      'On-Demand Heating'
    ],
    content: [
      {
        title: 'Tankless Water Heater Installation',
        description: 'We specialize in installing tankless water heaters that provide endless hot water while saving energy and space. Our technicians are certified to install both gas and electric tankless systems for residential and commercial properties.'
      },
      {
        title: 'Energy Efficiency Benefits',
        description: 'Tankless water heaters only heat water when needed, reducing energy consumption by up to 30% compared to traditional tank water heaters. This translates to significant savings on your utility bills over time.'
      },
      {
        title: 'Professional Installation Process',
        description: 'Our installation process includes proper sizing, gas line or electrical upgrades if needed, venting installation, and system testing. We ensure your tankless system operates at peak efficiency.'
      },
      {
        title: 'Maintenance & Repair Services',
        description: 'Regular maintenance keeps your tankless water heater running efficiently. We provide descaling, filter cleaning, and component inspection to prevent issues and extend system lifespan.'
      }
    ]
  },
  'plumber-water-recirculation-pump': {
    title: 'Water Recirculation Pump Repair & Installation',
    shortTitle: 'Water Recirculation Pumps',
    description: 'Professional repair and installation of hot water recirculation pumps',
    heroTitle: 'Water Recirculation Pump Services',
    heroSubtitle: 'Get instant hot water and save water with efficient recirculation systems',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Hot Water Recirculation Pump Installation',
      'Recirculation Pump Repair & Maintenance',
      'Timer-Controlled Recirculation Systems',
      'Demand-Controlled Recirculation Systems',
      'Pump Replacement & Upgrades',
      'System Optimization & Tuning'
    ],
    benefits: [
      'Instant Hot Water',
      'Water Conservation',
      'Energy Efficiency',
      'Reduced Wait Times',
      'Lower Utility Bills',
      'Improved Comfort'
    ],
    content: [
      {
        title: 'Water Recirculation Pump Installation',
        description: 'We install hot water recirculation pumps that provide instant hot water at every faucet in your home or business. Our systems eliminate the wait for hot water while conserving water and energy.'
      },
      {
        title: 'Energy-Efficient Solutions',
        description: 'Our recirculation systems use smart timers and demand controls to minimize energy consumption while maximizing convenience. We ensure your system operates efficiently and cost-effectively.'
      },
      {
        title: 'Professional Installation Process',
        description: 'Our installation includes proper pump sizing, piping modifications, electrical connections, and system testing. We ensure your recirculation system integrates seamlessly with your existing plumbing.'
      },
      {
        title: 'Maintenance & Repair Services',
        description: 'Regular maintenance keeps your recirculation pump running smoothly. We provide pump cleaning, motor inspection, valve maintenance, and system optimization to prevent issues.'
      }
    ]
  },
  'plumber-faucet-sink-repair': {
    title: 'Faucet and Sink Repair & Replacement',
    shortTitle: 'Faucet & Sink Services',
    description: 'Expert installation and repair of kitchen and bathroom faucets and sinks',
    heroTitle: 'Faucet & Sink Repair & Installation',
    heroSubtitle: 'Professional faucet and sink services for kitchens and bathrooms',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Kitchen Faucet Installation & Repair',
      'Bathroom Faucet Installation & Repair',
      'Sink Installation & Replacement',
      'Leak Detection & Repair',
      'Fixture Upgrades & Modernization',
      'Emergency Faucet & Sink Repairs'
    ],
    benefits: [
      'Leak-Free Performance',
      'Upgraded Fixtures',
      'Improved Functionality',
      'Modern Design Options',
      'Water Conservation',
      'Professional Installation'
    ],
    content: [
      {
        title: 'Faucet Installation & Repair',
        description: 'We install and repair all types of faucets including kitchen faucets, bathroom faucets, shower faucets, and specialty fixtures. Our work ensures leak-free operation and optimal performance.'
      },
      {
        title: 'Sink Installation & Replacement',
        description: 'Our sink installation services include kitchen sinks, bathroom sinks, utility sinks, and specialty sinks. We handle all types of materials including stainless steel, porcelain, granite, and composite.'
      },
      {
        title: 'Leak Detection & Repair',
        description: 'We quickly identify and repair faucet and sink leaks to prevent water damage and high utility bills. Our technicians use advanced diagnostic tools to locate hidden leaks.'
      },
      {
        title: 'Fixture Upgrades',
        description: 'Upgrade your faucets and sinks to modern, water-efficient models. We offer a wide selection of styles and finishes to match your home\'s design and improve functionality.'
      }
    ]
  },
  'plumber-water-conservation': {
    title: 'Water Conservation Plumbing Systems',
    shortTitle: 'Water Conservation',
    description: 'Eco-friendly water-saving plumbing solutions for homes and businesses',
    heroTitle: 'Water Conservation Plumbing Services',
    heroSubtitle: 'Reduce water waste and cut utility bills with sustainable plumbing solutions',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Low-Flow Fixture Installation',
      'Water-Efficient Toilet Installation',
      'Smart Irrigation Systems',
      'Greywater Recycling Systems',
      'Rainwater Harvesting Systems',
      'Water Conservation Audits'
    ],
    benefits: [
      'Reduced Water Waste',
      'Lower Utility Bills',
      'Environmental Protection',
      'Sustainable Living',
      'Rebate Eligibility',
      'Increased Property Value'
    ],
    content: [
      {
        title: 'Water-Efficient Fixtures',
        description: 'We install low-flow faucets, showerheads, and toilets that use significantly less water while maintaining performance. These fixtures can reduce water consumption by up to 50%.'
      },
      {
        title: 'Smart Irrigation Systems',
        description: 'Our smart irrigation systems use weather data and soil sensors to optimize watering schedules. This prevents overwatering and ensures your landscape gets exactly what it needs.'
      },
      {
        title: 'Greywater & Rainwater Systems',
        description: 'We design and install greywater recycling and rainwater harvesting systems that capture and reuse water for irrigation and other non-potable uses, further reducing water consumption.'
      },
      {
        title: 'Water Conservation Audits',
        description: 'Our comprehensive water audits identify opportunities to reduce water consumption throughout your property. We provide detailed recommendations and implementation plans.'
      }
    ]
  },
  'plumber-bathroom-renovation': {
    title: 'Custom Bathroom Renovation',
    shortTitle: 'Bathroom Renovation',
    description: 'From outdated to outstanding—expert bathroom design and renovation services',
    heroTitle: 'Custom Bathroom Renovation Services',
    heroSubtitle: 'Transform your bathroom with modern fixtures, efficient layouts, and timeless appeal',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Complete Bathroom Remodeling',
      'Plumbing Fixture Installation',
      'Shower & Tub Installation',
      'Vanity & Sink Installation',
      'Tile & Flooring Installation',
      'Accessibility Modifications'
    ],
    benefits: [
      'Modern Design',
      'Efficient Layouts',
      'Timeless Appeal',
      'Increased Home Value',
      'Improved Functionality',
      'Professional Quality'
    ],
    content: [
      {
        title: 'Complete Bathroom Remodeling',
        description: 'We handle complete bathroom renovations from design to completion. Our team works with you to create a beautiful, functional bathroom that meets your needs and exceeds your expectations.'
      },
      {
        title: 'Plumbing Fixture Installation',
        description: 'Our expert installation of toilets, sinks, showers, tubs, and other fixtures ensures proper function and long-lasting performance. We work with all major brands and styles.'
      },
      {
        title: 'Design & Layout Optimization',
        description: 'We optimize your bathroom layout for maximum functionality and comfort. Our designs consider traffic flow, storage needs, and accessibility requirements.'
      },
      {
        title: 'Quality Materials & Workmanship',
        description: 'We use only high-quality materials and provide expert workmanship that stands the test of time. Our renovations are built to last and maintain their beauty for years to come.'
      }
    ]
  },
  'plumber-water-system-repair': {
    title: 'Water System Installation & Repair',
    shortTitle: 'Water Systems',
    description: 'We install, repair, and maintain residential and commercial water systems',
    heroTitle: 'Water System Installation & Repair',
    heroSubtitle: 'Delivering clean, safe, and uninterrupted water flow for your property',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Whole House Water Filtration Systems',
      'Water Softener Installation',
      'Reverse Osmosis Systems',
      'Well Water System Installation',
      'Water Pressure Regulation',
      'Backflow Prevention Systems'
    ],
    benefits: [
      'Clean, Safe Water',
      'Uninterrupted Flow',
      'Improved Water Quality',
      'Protection from Contaminants',
      'Optimal Water Pressure',
      'System Reliability'
    ],
    content: [
      {
        title: 'Water Filtration Systems',
        description: 'We install whole-house water filtration systems that remove contaminants and improve water quality throughout your home. Our systems protect your family and your plumbing fixtures.'
      },
      {
        title: 'Water Softener Installation',
        description: 'Hard water can damage your plumbing and appliances. We install water softeners that remove minerals and extend the life of your plumbing system and water-using appliances.'
      },
      {
        title: 'Reverse Osmosis Systems',
        description: 'For the purest drinking water, we install reverse osmosis systems that remove virtually all contaminants. These systems provide clean, great-tasting water for drinking and cooking.'
      },
      {
        title: 'System Maintenance & Repair',
        description: 'Regular maintenance keeps your water systems operating efficiently. We provide filter changes, system testing, and component replacement to ensure optimal performance.'
      }
    ]
  },
  'plumber-slab-leak-repair': {
    title: 'Slab Leak Detection & Repair',
    shortTitle: 'Slab Leak Services',
    description: 'Fast and accurate slab leak detection with expert repairs',
    heroTitle: 'Slab Leak Detection & Repair',
    heroSubtitle: 'Protect your foundation and prevent costly water damage',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Advanced Leak Detection',
      'Slab Leak Repair',
      'Foundation Protection',
      'Pipe Rerouting Services',
      'Preventive Leak Detection',
      'Emergency Slab Leak Services'
    ],
    benefits: [
      'Foundation Protection',
      'Prevent Water Damage',
      'Preserve Structural Integrity',
      'Advanced Detection Technology',
      'Minimal Disruption',
      'Comprehensive Solutions'
    ],
    content: [
      {
        title: 'Advanced Leak Detection',
        description: 'We use state-of-the-art leak detection equipment including acoustic sensors, thermal imaging, and electronic leak detection to accurately locate slab leaks without unnecessary excavation.'
      },
      {
        title: 'Slab Leak Repair',
        description: 'Our repair methods include trenchless pipe repair, pipe rerouting, and targeted excavation. We choose the most effective and least disruptive approach for your specific situation.'
      },
      {
        title: 'Foundation Protection',
        description: 'Slab leaks can compromise your foundation. We provide comprehensive solutions that protect your foundation while repairing the leak and preventing future issues.'
      },
      {
        title: 'Preventive Services',
        description: 'Regular leak detection services can identify potential problems before they cause damage. We offer preventive maintenance programs to protect your property.'
      }
    ]
  },
  'plumber-sump-pump-repair': {
    title: 'Sump Pump Installation & Repair',
    shortTitle: 'Sump Pump Services',
    description: 'Keep your basement dry and protected with professional sump pump services',
    heroTitle: 'Sump Pump Installation & Repair',
    heroSubtitle: 'Flood prevention solutions built for long-term reliability',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Sump Pump Installation',
      'Sump Pump Repair & Maintenance',
      'Battery Backup Systems',
      'Sump Pump Replacement',
      'Emergency Sump Pump Services',
      'Flood Prevention Systems'
    ],
    benefits: [
      'Basement Protection',
      'Flood Prevention',
      'Long-Term Reliability',
      'Battery Backup Available',
      'Emergency Response',
      'Peace of Mind'
    ],
    content: [
      {
        title: 'Sump Pump Installation',
        description: 'We install reliable sump pumps that protect your basement from flooding. Our installations include proper sizing, backup systems, and professional setup for optimal performance.'
      },
      {
        title: 'Battery Backup Systems',
        description: 'Power outages often occur during storms when you need your sump pump most. We install battery backup systems that ensure your sump pump continues working even during power failures.'
      },
      {
        title: 'Maintenance & Repair',
        description: 'Regular maintenance keeps your sump pump ready for action. We provide cleaning, testing, and component replacement to ensure reliable operation when you need it most.'
      },
      {
        title: 'Emergency Services',
        description: 'When your sump pump fails, we provide 24/7 emergency repair services. Our team responds quickly to prevent flooding and restore protection to your basement.'
      }
    ]
  },
  'plumber-drain-cleaning': {
    title: 'Professional Drain Cleaning',
    shortTitle: 'Drain Cleaning',
    description: 'Fast and effective drain cleaning for clogged sinks, tubs, and sewer lines',
    heroTitle: 'Professional Drain Cleaning Services',
    heroSubtitle: 'Restore smooth drainage and eliminate blockages',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Kitchen Drain Cleaning',
      'Bathroom Drain Cleaning',
      'Sewer Line Cleaning',
      'Hydro Jetting Services',
      'Video Camera Inspection',
      'Preventive Drain Maintenance'
    ],
    benefits: [
      'Fast Service',
      'Effective Results',
      'Prevent Future Issues',
      'Advanced Equipment',
      'Video Inspection',
      'Comprehensive Cleaning'
    ],
    content: [
      {
        title: 'Professional Drain Cleaning',
        description: 'We use advanced equipment and techniques to clear even the toughest clogs. Our hydro jetting and mechanical cleaning methods restore full drainage flow quickly and effectively.'
      },
      {
        title: 'Video Camera Inspection',
        description: 'Our video camera inspections allow us to see inside your pipes to identify the cause of clogs and potential problems. This helps us provide targeted solutions and prevent future issues.'
      },
      {
        title: 'Sewer Line Cleaning',
        description: 'We clean main sewer lines and lateral connections to prevent backups and ensure proper waste flow. Our services keep your entire drainage system functioning properly.'
      },
      {
        title: 'Preventive Maintenance',
        description: 'Regular drain cleaning prevents clogs and keeps your plumbing system running smoothly. We offer maintenance programs to protect your drains and prevent costly repairs.'
      }
    ]
  },
  'plumber-drain-cleaning': {
    title: 'Expert Drain Repair',
    shortTitle: 'Drain Repair',
    description: 'We fix damaged or leaking drains with precision',
    heroTitle: 'Expert Drain Repair Services',
    heroSubtitle: 'Prevent backups, water damage, and ensure smooth-flowing plumbing',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Drain Pipe Repair',
      'Leaking Drain Repair',
      'Trenchless Drain Repair',
      'Drain Line Replacement',
      'Emergency Drain Repair',
      'Drain System Diagnostics'
    ],
    benefits: [
      'Prevent Backups',
      'Stop Water Damage',
      'Smooth Flow',
      'Reliable System',
      'Trenchless Options',
      'Expert Precision'
    ],
    content: [
      {
        title: 'Drain Pipe Repair',
        description: 'We repair damaged, cracked, or broken drain pipes using advanced techniques. Our repairs restore proper drainage and prevent water damage to your property.'
      },
      {
        title: 'Trenchless Drain Repair',
        description: 'When possible, we use trenchless repair methods that minimize disruption to your property. These techniques repair drains without extensive excavation.'
      },
      {
        title: 'Leak Detection & Repair',
        description: 'We quickly identify and repair leaking drains to prevent water damage and mold growth. Our diagnostic tools locate hidden leaks with precision.'
      },
      {
        title: 'Drain System Diagnostics',
        description: 'Our comprehensive diagnostics identify the root cause of drain problems. This allows us to provide targeted repairs that solve the problem permanently.'
      }
    ]
  },
  'plumber-sewer-line-repair': {
    title: 'Sewer Line Inspection & Replacement',
    shortTitle: 'Sewer Line Services',
    description: 'Thorough sewer camera inspections, repairs, and full replacements',
    heroTitle: 'Sewer Line Inspection & Replacement',
    heroSubtitle: 'Ensure proper waste flow and avoid costly backups',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Sewer Camera Inspection',
      'Sewer Line Repair',
      'Sewer Line Replacement',
      'Trenchless Sewer Repair',
      'Sewer Line Cleaning',
      'Emergency Sewer Services'
    ],
    benefits: [
      'Proper Waste Flow',
      'Avoid Costly Backups',
      'Smooth Operation',
      'Advanced Inspection',
      'Trenchless Options',
      'Comprehensive Solutions'
    ],
    content: [
      {
        title: 'Sewer Camera Inspection',
        description: 'Our advanced camera inspections provide detailed views of your sewer line condition. This helps us identify problems early and plan the most effective repair strategy.'
      },
      {
        title: 'Sewer Line Repair',
        description: 'We repair damaged sewer lines using modern techniques that minimize disruption. Our repairs restore proper waste flow and prevent backups.'
      },
      {
        title: 'Trenchless Sewer Replacement',
        description: 'When replacement is needed, we offer trenchless options that minimize damage to your property. These methods are faster and less disruptive than traditional excavation.'
      },
      {
        title: 'Preventive Maintenance',
        description: 'Regular sewer line maintenance prevents major problems and costly repairs. We offer maintenance programs to keep your sewer system functioning properly.'
      }
    ]
  },
  'plumber-gas-line-repair': {
    title: 'Gas Line Installation & Repair',
    shortTitle: 'Gas Line Services',
    description: 'Safe and code-compliant gas line installations, repairs, and replacements',
    heroTitle: 'Gas Line Installation & Repair',
    heroSubtitle: 'Power your appliances with confidence and protect your property',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Gas Line Installation',
      'Gas Line Repair',
      'Gas Appliance Hookups',
      'Gas Line Inspection',
      'Emergency Gas Line Services',
      'Gas Line Upgrades'
    ],
    benefits: [
      'Safe Operation',
      'Code Compliance',
      'Appliance Protection',
      'Emergency Response',
      'Professional Installation',
      'Peace of Mind'
    ],
    content: [
      {
        title: 'Gas Line Installation',
        description: 'We install gas lines for new construction, additions, and appliance installations. All work is performed to code and includes proper testing and safety measures.'
      },
      {
        title: 'Gas Appliance Hookups',
        description: 'We safely connect gas appliances including water heaters, furnaces, stoves, dryers, and fireplaces. Our installations ensure proper operation and safety.'
      },
      {
        title: 'Gas Line Inspection',
        description: 'Regular gas line inspections identify potential safety issues before they become problems. We check for leaks, corrosion, and code compliance.'
      },
      {
        title: 'Emergency Gas Services',
        description: 'Gas leaks are serious safety hazards. We provide 24/7 emergency gas line services to quickly address leaks and restore safe operation.'
      }
    ]
  },
  'plumber-leak-detection': {
    title: 'Leak Detection & Repair',
    shortTitle: 'Leak Detection',
    description: 'Advanced leak detection tools to quickly locate and repair hidden water leaks',
    heroTitle: 'Leak Detection & Repair Services',
    heroSubtitle: 'Minimize damage, lower water bills, and keep your plumbing efficient',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Water Leak Detection',
      'Slab Leak Detection',
      'Pipe Leak Repair',
      'Fixture Leak Repair',
      'Emergency Leak Services',
      'Preventive Leak Detection'
    ],
    benefits: [
      'Minimize Damage',
      'Lower Water Bills',
      'Efficient Plumbing',
      'Advanced Technology',
      'Quick Detection',
      'Comprehensive Repair'
    ],
    content: [
      {
        title: 'Advanced Leak Detection',
        description: 'We use state-of-the-art equipment including acoustic sensors, thermal imaging, and electronic leak detection to locate hidden leaks quickly and accurately.'
      },
      {
        title: 'Comprehensive Leak Repair',
        description: 'Once we locate a leak, we provide complete repair services. Our repairs address the root cause and prevent future leaks from occurring.'
      },
      {
        title: 'Water Bill Analysis',
        description: 'Unexplained increases in water bills often indicate hidden leaks. We analyze your water usage patterns to identify potential problems.'
      },
      {
        title: 'Preventive Services',
        description: 'Regular leak detection services can identify potential problems before they cause damage. We offer maintenance programs to protect your property.'
      }
    ]
  },
  'plumber-toilet-repair': {
    title: 'Toilet Repair & Installation',
    shortTitle: 'Toilet Services',
    description: 'Fast and reliable toilet plumbing services for clogs, leaks, and replacements',
    heroTitle: 'Toilet Repair & Installation',
    heroSubtitle: 'Restore full function, improve efficiency, and prevent water waste',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Toilet Installation',
      'Toilet Repair',
      'Toilet Replacement',
      'Clog Removal',
      'Leak Repair',
      'Toilet Maintenance'
    ],
    benefits: [
      'Full Function',
      'Improved Efficiency',
      'Prevent Water Waste',
      'Professional Installation',
      'Fast Service',
      'Reliable Operation'
    ],
    content: [
      {
        title: 'Toilet Installation',
        description: 'We install new toilets with proper plumbing connections and ensure optimal performance. Our installations include proper sealing and testing for leak-free operation.'
      },
      {
        title: 'Toilet Repair',
        description: 'We repair all toilet issues including running toilets, clogs, leaks, and flushing problems. Our repairs restore full function and prevent water waste.'
      },
      {
        title: 'Toilet Replacement',
        description: 'When repair isn\'t cost-effective, we provide toilet replacement services. We help you choose water-efficient models that save money and water.'
      },
      {
        title: 'Emergency Toilet Services',
        description: 'Toilet problems can be urgent. We provide emergency repair services to quickly restore function and prevent water damage.'
      }
    ]
  },
  'plumber-bathroom-renovation': {
    title: 'Bathroom Remodeling Services',
    shortTitle: 'Bathroom Remodeling',
    description: 'Complete bathroom remodeling and renovation services',
    heroTitle: 'Bathroom Remodeling & Renovation',
    heroSubtitle: 'Transform your bathroom with expert design and installation',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Complete Bathroom Remodeling',
      'Shower & Tub Installation',
      'Vanity & Fixture Installation',
      'Plumbing System Upgrades',
      'Accessibility Modifications',
      'Design Consultation'
    ],
    benefits: [
      'Expert Design',
      'Quality Materials',
      'Licensed Contractors',
      'Timeline Guarantee',
      'Warranty Coverage',
      'Project Management'
    ],
    content: [
      {
        title: 'Complete Bathroom Remodeling',
        description: 'We handle complete bathroom renovations from design to completion. Our services include plumbing upgrades, fixture installation, tile work, and all necessary modifications to create your dream bathroom.'
      },
      {
        title: 'Professional Design & Planning',
        description: 'Our team works with you to design a functional and beautiful bathroom that meets your needs and budget. We handle all permits, inspections, and ensure compliance with building codes.'
      },
      {
        title: 'Quality Fixture Installation',
        description: 'We install high-quality fixtures including showers, tubs, vanities, toilets, and faucets. Our installation ensures proper function, water efficiency, and long-term durability.'
      },
      {
        title: 'Accessibility & Safety Features',
        description: 'We can incorporate accessibility features such as grab bars, walk-in tubs, and barrier-free showers. Our modifications improve safety and accessibility for all family members.'
      }
    ]
  },
  'plumber-emergency-service': {
    title: 'Emergency Plumbing Services',
    shortTitle: 'Emergency Plumbing',
    description: '24/7 emergency plumbing repair and services',
    heroTitle: '24/7 Emergency Plumbing Services',
    heroSubtitle: 'Fast response emergency plumbing when you need it most',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    services: [
      'Burst Pipe Repair',
      'Water Heater Emergencies',
      'Sewer Line Emergencies',
      'Gas Line Emergencies',
      'Flooding & Water Damage',
      'Clogged Drain Emergencies'
    ],
    benefits: [
      '24/7 Availability',
      'Fast Response Time',
      'Emergency Equipment',
      'Licensed Technicians',
      'Insurance Coverage',
      'Prevent Further Damage'
    ],
    content: [
      {
        title: '24/7 Emergency Response',
        description: 'We provide round-the-clock emergency plumbing services for urgent situations. Our team is always available to handle burst pipes, water heater failures, sewer backups, and other plumbing emergencies.'
      },
      {
        title: 'Rapid Emergency Repair',
        description: 'Our emergency technicians are equipped with the tools and parts needed to quickly resolve most plumbing emergencies. We prioritize safety and work efficiently to minimize damage and restore function.'
      },
      {
        title: 'Comprehensive Emergency Services',
        description: 'We handle all types of plumbing emergencies including water leaks, gas leaks, sewer backups, and equipment failures. Our team is trained to assess situations quickly and provide effective solutions.'
      },
      {
        title: 'Damage Prevention',
        description: 'Quick response to plumbing emergencies prevents costly water damage and property loss. Our emergency services help protect your home or business from extensive damage.'
      }
    ]
  }
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { location, service } = await params;
  
  // Get location data from local import
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locationData = (locationsData as any).locations.find((loc: any) => loc.id === location);
  if (!locationData) {
    notFound();
  }
  
  const safeLocation = locationData;
  
  // Get service data
  const serviceInfo = serviceData[service as keyof typeof serviceData];
  if (!serviceInfo) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90">
          <img 
            src="/hero-bg.jpg" 
            alt="Professional plumber working"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {serviceInfo.heroTitle} in {safeLocation.name}, {safeLocation.state}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
              {serviceInfo.heroSubtitle}
            </p>
            <div className="mt-8">
              <a
                href={`tel:${safeLocation.phone.replace(/\D/g, '')}`}
                className="bg-[#1c7bc8] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors duration-300 inline-block"
              >
                Call {safeLocation.phone} Now
              </a>
            </div>
          </div>
        </div>
        

      </section>

      {/* Service Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {serviceInfo.title} Services in {safeLocation.name}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Professional {serviceInfo.title.toLowerCase()} services for homes and businesses in {safeLocation.name}, {safeLocation.state}. 
              Our licensed and experienced technicians provide reliable, professional service with guaranteed results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {serviceInfo.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a
              href={`tel:${safeLocation.phone.replace(/\D/g, '')}`}
              className="bg-[#1c7bc8] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300 inline-block"
            >
              Call {safeLocation.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Our Services List */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={serviceInfo.image}
              alt={serviceInfo.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our {serviceInfo.shortTitle} Services</h3>
              <div className="space-y-3">
                {serviceInfo.services.map((serviceItem, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-[#1c7bc8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{serviceItem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {serviceInfo.title} in {safeLocation.name}, {safeLocation.state}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceInfo.content.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Other Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Other Plumbing Services in {safeLocation.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceData).map(([serviceSlug, serviceInfo]) => {
              // Skip the current service
              if (serviceSlug === service) return null;
              
              return (
                <Link key={serviceSlug} href={`https://${location.toLowerCase()}.gdprofessionalplumbing.com/${serviceSlug}`} className="block">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-200">
                    <img
                      src={serviceInfo.image}
                      alt={serviceInfo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">» {serviceInfo.title} in {safeLocation.name}, {safeLocation.state}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Call GD Professional Plumbing at {safeLocation.phone}. {serviceInfo.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1c7bc8] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need {serviceInfo.shortTitle} in {safeLocation.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us today for professional {serviceInfo.title.toLowerCase()} services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${safeLocation.phone.replace(/\D/g, '')}`}
              className="bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-lg text-xl hover:bg-gray-50 transition-colors duration-300"
            >
              Call {safeLocation.phone}
            </a>
            <Link
              href={`https://${location.toLowerCase()}.gdprofessionalplumbing.com`}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-xl hover:bg-white hover:text-[#1c7bc8] transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 