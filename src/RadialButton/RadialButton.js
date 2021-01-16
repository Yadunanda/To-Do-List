import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import React from 'react'

let RadialButton=(props) => {




  return(
    <FormControl comptwont="fieldset">
          <FormLabel comptwont="legend">Level of Importance</FormLabel>
          <RadioGroup row aria-label="gender" name="gender1" >
            <FormControlLabel value="High Importance" control={<Radio />} label="High Importance" />
            <FormControlLabel value="Medium Importance" control={<Radio />} label="Medium Importance" />
            <FormControlLabel value="Low Importance" control={<Radio />} label="Low Importance" />
          </RadioGroup>
        </FormControl>
  )

}

export default RadialButton
