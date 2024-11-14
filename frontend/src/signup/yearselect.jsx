
import {TextField, MenuItem} from "@mui/material"

const years =[
    {value: 'Freshman'}, 
    {value: 'Sophmore'}, 
    {value: 'Junior'}, 
    {value: 'Senior'}, 
    {value: 'Graduate'}, 
    {value: 'Doctoral'}]    

export default function YearSelect(props){
    return(
    
        <TextField
        controlled
        autoComplete
        placeholder={'Year in school'}
        onChange={(e)=>{{props.setYear(e.target.value), console.log(props.year)}}}
        id='outlined-year-select'
        select
        label='Year in school'>
            {years.map((option)=>(
                <MenuItem key={option.key} value={option.value}>
                    {option.value}
                </MenuItem>
            ))}
        </TextField>   
    )

}