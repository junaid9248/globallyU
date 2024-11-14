
import {TextField,  MenuItem} from "@mui/material"

const majors = [
    { value: "Accounting" },
    { value: "Actuarial Science" },
    { value: "Advertising Major" },
    { value: "Aerospace Engineering" },
    { value: "African Languages, Literatures, and Linguistics" },
    { value: "African Studies" },
    { value: "African-American Studies" },
    { value: "Agricultural Business and Management" },
    { value: "Agricultural Economics" },
    { value: "Agricultural Education" },
    { value: "Agricultural Journalism" },
    { value: "Agricultural Mechanization Major" },
    { value: "Agricultural Technology Management" },
    { value: "Agricultural/Biological Engineering and Bioengineering" },
    { value: "Agriculture" },
    { value: "Agronomy and Crop Science" },
    { value: "Air Traffic Control" },
    { value: "American History" },
    { value: "American Literature" },
    { value: "American Sign Language" },
    { value: "American Studies" },
    { value: "Anatomy" },
    { value: "Ancient Studies" },
    { value: "Animal Behavior and Ethology" },
    { value: "Animal Science" },
    { value: "Animation and Special Effects" },
    { value: "Anthropology" },
    { value: "Applied Mathematics" },
    { value: "Aquaculture" },
    { value: "Aquatic Biology" },
    { value: "Arabic" },
    { value: "Archeology" },
    { value: "Architectural Engineering" },
    { value: "Architectural History" },
    { value: "Architecture" },
    { value: "Art" },
    { value: "Art Education" },
    { value: "Art History" },
    { value: "Art Therapy" },
    { value: "Artificial Intelligence and Robotics" },
    { value: "Asian-American Studies" },
    { value: "Astronomy" },
    { value: "Astrophysics" },
    { value: "Athletic Training" },
    { value: "Atmospheric Science" },
    { value: "Automotive Engineering" },
    { value: "Aviation" },
    { value: "Bakery Science" },
    { value: "Biblical Studies" },
    { value: "Biochemistry" },
    { value: "Bioethics" },
    { value: "Biology" },
    { value: "Biomedical Engineering" },
    { value: "Biomedical Science" },
    { value: "Biopsychology" },
    { value: "Biotechnology" },
    { value: "Botany/Plant Biology" },
    { value: "Business Administration/Management" },
    { value: "Business Communications" },
    { value: "Business Education" },
    { value: "Canadian Studies" },
    { value: "Caribbean Studies" },
    { value: "Cell Biology Major" },
    { value: "Ceramic Engineering" },
    { value: "Ceramics" },
    { value: "Chemical Engineering Major" },
    { value: "Chemical Physics" },
    { value: "Chemistry Major" },
    { value: "Child Care" },
    { value: "Child Development" },
    { value: "Chinese" },
    { value: "Chiropractic" },
    { value: "Church Music" },
    { value: "Cinematography and Film/Video Production" },
    // ... and so on for each major
  ];
  
 export default function MajorSelect(props){
  
    return(
     <TextField
    id='major-select-textfield'
    controlled
    autoComplete
    placeholder={'Major'}
    select
    label={'Major'}
  
    slotProps={{
      InputLabel:{shrink:false, disableAnimation:true},
    }}
    onChange={(e)=>{props.setMajor(e.target.value), console.log(props.major)}}>
      {majors.map((option)=>(
                  <MenuItem key={option.key} value={option.value}>
                      {option.value}
                  </MenuItem>
              ))}
   </TextField>)
  
  }