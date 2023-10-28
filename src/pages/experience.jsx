import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import { createTheme, ThemeProvider } from '@mui/material/styles';




export default function LabTabs() {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const theme = createTheme({
        palette: {
          primary:{ main: '#000000'},
          secondary: { main: '#fcf9fa'},
        },
      });


  return (


    <div id='experience'>    
    <h1>Work Experience</h1>

    <div className='content'>

    <ThemeProvider theme={theme}> <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="primary"
        indicatorColor="#primary">
            <Tab label="SK Finance Ltd" value="1" />
            <Tab label="Loading" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1" style={{color:'#2c2823', fontFamily:'serif', fontSize:'1.3rem'}}>
          <div id='exp'>
          <div id='position'>Software Engineering Intern <br/>May 2023 - July 2023</div>
          <div id='line'></div>
          <div id='description'>• Developed SK Idea Box, which is a discussion forum to be used within the company to promote a culture of
 idea-sharing.<br/>
 • Helped in the development of the admin side and the UAT testing of ”Evaluare”, which is a tool created with
 the aim of completely digitalising the process of property valuation.</div>
          </div>
        </TabPanel>
        <TabPanel value="2">soon</TabPanel>
        


      </TabContext>
    </Box>
    </ThemeProvider>
    </div>
    </div>

  );
}