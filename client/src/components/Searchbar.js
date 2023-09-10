import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

export default function Highlights() {
  return (
    <Autocomplete
      id="highlights-demo"
      sx={{ width: 500 }}
      options={cancerTypes}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} label="Study Your Cancer" margin="normal" />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option, inputValue, { insideWords: true });
        const parts = parse(option, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}

const cancerTypes = [
    "Breast Cancer",
    "Lung Cancer",
    "Prostate Cancer",
    "Colorectal (Colon) Cancer",
    "Bladder Cancer",
    "Leukemia",
    "Melanoma",
    "Pancreatic Cancer",
    "Ovarian Cancer",
    "Brain Cancer",
    "Liver Cancer",
    "Thyroid Cancer",
    "Esophageal Cancer",
    "Stomach (Gastric) Cancer",
    "Kidney Cancer",
    "Cervical Cancer",
    "Non-Hodgkin Lymphoma",
    "Multiple Myeloma",
    "Sarcoma",
    "Testicular Cancer",
    "Hodgkin Lymphoma",
    "Mouth and Throat Cancer",
    "Uterine (Endometrial) Cancer",
    "Gallbladder Cancer",
    "Nasopharyngeal Cancer",
    "Eye Cancer",
  ];