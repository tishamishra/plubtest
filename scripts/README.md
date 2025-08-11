# Location Data Extraction Scripts

These scripts help you extract neighborhood and zip code data from competitor websites to populate your `locations.json` file.

## 📁 Scripts Available

### 1. `extract-location-data.js` - Single Page Extraction
Extracts data from one location page at a time.

### 2. `extract-multiple-locations.js` - Multi-Page Collection
Collects data from multiple location pages and compiles them into one JSON file.

## 🚀 How to Use

### Method 1: Single Page Extraction

1. **Open the competitor's location page** (e.g., `https://competitor.com/locations/san-diego-ca`)

2. **Open browser console** (F12 → Console tab)

3. **Copy and paste** the entire content of `extract-location-data.js`

4. **Press Enter** to run the script

5. **Copy the JSON output** and add it to your `locations.json` file

### Method 2: Multi-Page Collection (Recommended)

1. **Open the first location page** on the competitor website

2. **Open browser console** (F12 → Console tab)

3. **Copy and paste** the entire content of `extract-multiple-locations.js`

4. **Press Enter** to run the script

5. **Navigate to the next location page** and run the script again

6. **Repeat** for all location pages you want to extract

7. **Click "Copy All"** in the control panel to get all data at once

## 📊 What Gets Extracted

- **City name** and **state**
- **Phone number**
- **Neighborhoods** (from Google Maps links)
- **Zip codes** (5-digit patterns)
- **Service areas** (other city links)

## 🎯 Example Output

```json
{
  "id": "san-diego",
  "name": "San Diego",
  "state": "CA",
  "fullName": "San Diego, CA",
  "phone": "(555) 123-4567",
  "areas": [
    "Downtown",
    "Little Italy",
    "Gaslamp Quarter",
    "East Village"
  ],
  "zipCodes": [
    "92101",
    "92102",
    "92103",
    "92104"
  ],
  "extractedAt": "2024-01-15T10:30:00.000Z"
}
```

## 💡 Tips

1. **Make sure the page is fully loaded** before running the script
2. **Expand any accordion sections** that contain neighborhoods/zip codes
3. **Use the multi-page script** for efficiency when extracting many locations
4. **Check the console output** to verify the data was extracted correctly
5. **The control panel** will show you progress and total locations collected

## 🔧 Troubleshooting

- **No neighborhoods found**: Make sure the accordion sections are expanded
- **No zip codes found**: Check if zip codes are visible on the page
- **Wrong city/state**: The script tries to extract from URL first, then page content
- **Script not working**: Make sure you're on a location page with the expected structure

## 📝 Integration

After extracting the data:

1. **Copy the JSON output**
2. **Open your `src/data/locations.json` file**
3. **Add the new location data** to the `locations` array
4. **Save the file**
5. **Test the location page** on your website

The extracted data will automatically work with your accordion components and Google Maps integration! 