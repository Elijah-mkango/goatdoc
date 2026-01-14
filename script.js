
// Disease database (shortened for brevity in this example; add all entries as needed)
const diseases = [
  {
    name: "Worm Infestation (Haemonchus / Internal Parasites)",
    symptoms: ["weight loss", "diarrhea", "pale gums", "anemia", "weakness"],
    treatment: "Administer appropriate dewormers such as albendazole, ivermectin, or levamisole based on veterinary advice.",
    medication: "Albendazole, Ivermectin, Levamisole",
    prevention: "Rotational grazing, fecal testing, strategic deworming."
  },
  {
    name: "Coccidiosis",
    symptoms: ["bloody diarrhea", "diarrhea", "dehydration", "weight loss", "poor growth"],
    treatment: "Use anticoccidial drugs and provide fluids.",
    medication: "Sulfonamides, Amprolium",
    prevention: "Clean housing, avoid overcrowding, preventive medication in kids."
  },
  {
    name: "Pneumonia",
    symptoms: ["coughing", "fever", "nasal discharge", "difficulty breathing"],
    treatment: "Antibiotic therapy and improved ventilation.",
    medication: "Oxytetracycline, Penicillin",
    prevention: "Proper housing, reduce stress, protect from cold and rain."
  },
  {
    name: "Peste des Petits Ruminants (PPR)",
    symptoms: ["fever", "mouth sores", "diarrhea", "nasal discharge"],
    treatment: "No cure; provide supportive care.",
    medication: "Supportive therapy only",
    prevention: "Vaccination and quarantine of new animals."
  },
  {
    name: "Mastitis",
    symptoms: ["swollen udder", "reduced milk", "abnormal milk", "painful udder"],
    treatment: "Antibiotics and frequent milking.",
    medication: "Intramammary antibiotics",
    prevention: "Clean milking practices and udder hygiene."
  },
  {
    name: "Foot Rot",
    symptoms: ["lameness", "hoof smell", "hoof discharge", "limping"],
    treatment: "Hoof trimming and antibiotics.",
    medication: "Oxytetracycline, Zinc sulfate foot bath",
    prevention: "Dry housing and routine hoof care."
  },
  {
    name: "Enterotoxemia (Overeating Disease)",
    symptoms: ["sudden death", "diarrhea", "convulsions", "bloating"],
    treatment: "Immediate antitoxin administration.",
    medication: "Clostridium antitoxin",
    prevention: "Vaccination and controlled feeding."
  },
  {
    name: "Heartwater",
    symptoms: ["high fever", "nervous signs", "sudden death"],
    treatment: "Early antibiotic treatment.",
    medication: "Oxytetracycline",
    prevention: "Effective tick control."
  },
  {
  name: "Caprine Arthritis Encephalitis (CAE)",
  symptoms: ["swollen joints", "lameness", "arthritis", "weak kids", "nervous signs"],
  treatment: "No cure; manage pain and provide supportive care.",
  medication: "Anti-inflammatory drugs (supportive)",
  prevention: "Test herd regularly, separate kids at birth, avoid infected milk."
},
{
  name: "Orf (Contagious Ecthyma)",
  symptoms: ["scabs on mouth", "mouth sores", "lip lesions", "udder sores"],
  treatment: "Supportive care and prevention of secondary infections.",
  medication: "Topical antiseptics, antibiotics for secondary infection",
  prevention: "Vaccination in endemic areas, isolate affected animals."
},
{
  name: "Brucellosis",
  symptoms: ["abortion", "infertility", "retained placenta", "weak kids"],
  treatment: "No effective treatment; culling recommended.",
  medication: "None (reportable disease)",
  prevention: "Testing, strict biosecurity, avoid infected stock."
},
{
  name: "Milk Fever (Hypocalcemia)",
  symptoms: ["unable to stand", "muscle tremors", "weakness", "cold ears"],
  treatment: "Immediate calcium supplementation.",
  medication: "Calcium borogluconate",
  prevention: "Balanced mineral nutrition before and after kidding."
},
{
  name: "Ketosis (Pregnancy Toxemia)",
  symptoms: ["loss of appetite", "weakness", "nervous signs", "sweet breath"],
  treatment: "Provide energy supplements and veterinary intervention.",
  medication: "Propylene glycol, glucose solutions",
  prevention: "Adequate nutrition during late pregnancy."
},
{
  name: "White Muscle Disease",
  symptoms: ["muscle stiffness", "weakness", "difficulty walking"],
  treatment: "Supplement selenium and vitamin E.",
  medication: "Selenium + Vitamin E injections",
  prevention: "Mineral supplementation in deficient areas."
},
{
  name: "Johne’s Disease",
  symptoms: ["chronic weight loss", "persistent diarrhea", "poor condition"],
  treatment: "No cure.",
  medication: "None",
  prevention: "Test herd, cull infected animals, improve hygiene."
},
{
  name: "Anthrax",
  symptoms: ["sudden death", "bleeding from openings", "collapse"],
  treatment: "Emergency veterinary treatment only.",
  medication: "Penicillin (early cases only)",
  prevention: "Vaccination, do not open carcasses."
},
{
  name: "Lice Infestation",
  symptoms: ["itching", "hair loss", "restlessness", "poor coat"],
  treatment: "Apply insecticides or pour-on treatments.",
  medication: "Ivermectin, pyrethroid sprays",
  prevention: "Regular inspection and clean housing."
},
{
  name: "Mange (Mites)",
  symptoms: ["intense itching", "thick skin", "hair loss", "scabs"],
  treatment: "Systemic and topical acaricides.",
  medication: "Ivermectin, lime sulfur dips",
  prevention: "Quarantine new animals, routine parasite control."
},
{
  name: "Caseous Lymphadenitis (CL)",
  symptoms: ["abscesses in lymph nodes", "weight loss", "reduced milk", "internal organ abscesses"],
  treatment: "Drain abscesses carefully, antibiotics may help but not curative.",
  medication: "Antibiotics (limited effectiveness)",
  prevention: "Cull affected animals, disinfect equipment, avoid contamination."
},
{
  name: "Scrapie",
  symptoms: ["intense itching", "loss of coordination", "behavioral changes", "weight loss"],
  treatment: "No cure.",
  medication: "None",
  prevention: "Genetic selection, culling, strict biosecurity."
},
{
  name: "Blue Tongue",
  symptoms: ["fever", "swelling of face", "ulcers in mouth", "lameness"],
  treatment: "Supportive care only.",
  medication: "None specific",
  prevention: "Vector control (biting midges), vaccination in endemic areas."
},
{
  name: "Q Fever (Coxiellosis)",
  symptoms: ["abortions", "stillbirths", "weak kids", "fever"],
  treatment: "Antibiotics may reduce shedding.",
  medication: "Tetracyclines",
  prevention: "Biosecurity, avoid infected animals, proper disposal of birth products."
},
{
  name: "Salmonellosis",
  symptoms: ["diarrhea", "fever", "dehydration", "weakness"],
  treatment: "Fluid therapy and antibiotics.",
  medication: "Broad-spectrum antibiotics (consult vet)",
  prevention: "Good hygiene, avoid contaminated feed/water."
},
{
  name: "Tetanus",
  symptoms: ["muscle stiffness", "difficulty walking", "convulsions", "lockjaw"],
  treatment: "Antitoxin and antibiotics.",
  medication: "Tetanus antitoxin, Penicillin",
  prevention: "Vaccination, proper wound care."
},
{
  name: "Navel Ill (Joint Ill)",
  symptoms: ["swollen joints", "lameness in kids", "fever"],
  treatment: "Antibiotics and supportive care.",
  medication: "Penicillin, Oxytetracycline",
  prevention: "Clean kidding environment, disinfect navels at birth."
},
{
  name: "Pasteurellosis",
  symptoms: ["fever", "coughing", "nasal discharge", "sudden death"],
  treatment: "Antibiotics and supportive care.",
  medication: "Oxytetracycline, Penicillin",
  prevention: "Vaccination, reduce stress, good ventilation."
}
];
// Diagnosis function
function diagnose() {
  const input = document.getElementById("symptomsInput").value.toLowerCase();
  const userSymptoms = input.split(/,|\s+/).filter(s => s.length > 2);
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if(userSymptoms.length < 2){
    resultsDiv.innerHTML = "<p><strong>Please enter at least two symptoms.</strong></p>";
    return;
  }

  let matches = [];

  diseases.forEach(disease => {
    let score = disease.symptoms.reduce((acc, s) =>
      acc + userSymptoms.some(us => s.includes(us) || us.includes(s) ? 1 : 0), 0
    );
    if(score >= 2) matches.push({...disease, score});
  });

  if(matches.length === 0){
    resultsDiv.innerHTML = "<p><strong>No close match found.</strong> Please consult a veterinarian.</p>";
    return;
  }

  matches.sort((a,b) => b.score - a.score);

  matches.slice(0,3).forEach(d => {
    resultsDiv.innerHTML += `
      <div class="card">
        <h3>${d.name}</h3>
        <p><strong>Treatment:</strong> ${d.treatment}</p>
        <p><strong>Medication:</strong> ${d.medication}</p>
        <p><strong>Prevention:</strong> ${d.prevention}</p>
        <p style="color:#b00020;"><strong>Seek veterinary help if symptoms worsen.</strong></p>
      </div>
    `;
  });

  document.getElementById("vetContacts").style.display = "block";
}

// WhatsApp contact
function contactVet() {
  const symptoms = document.getElementById("symptomsInput").value;
  const resultsText = document.getElementById("results").innerText;
  const phone = "265896997064";

  const message = `Hello Vet,

Symptoms entered:
${symptoms}

System suggestion:
${resultsText}

Please advise.`;

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url,"_blank");
}
