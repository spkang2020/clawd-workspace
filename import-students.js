const fs = require('fs');
const https = require('https');

// Read and parse CSV
const csv = fs.readFileSync('/home/peter-kang/clawd/ib-prospects-linkedin.csv', 'utf8');
const lines = csv.trim().split('\n');
const headers = lines[0].split(',');

console.log('Headers:', headers);
console.log('Total rows:', lines.length - 1);

const contacts = [];
for (let i = 1; i < lines.length; i++) {
  // Handle CSV parsing (simple - assumes no commas in values)
  const values = lines[i].split(',');
  const name = values[0] || '';
  const nameParts = name.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';
  
  contacts.push({
    first_name: firstName,
    last_name: lastName,
    school: values[1] || '',
    notes: `Year: ${values[2] || 'N/A'} | ${values[3] || ''} | Tier: ${values[4] || 'N/A'}`.trim(),
    stage: 'No Action'
  });
}

console.log('Sample contact:', contacts[0]);
console.log('Parsed contacts:', contacts.length);

// Output as JSON for import
fs.writeFileSync('/home/peter-kang/clawd/students-to-import.json', JSON.stringify(contacts, null, 2));
console.log('Wrote students-to-import.json');
