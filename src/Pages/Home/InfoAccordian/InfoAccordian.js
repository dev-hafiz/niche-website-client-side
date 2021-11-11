import { CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import accoedianBg from '../../../images/cycleillustrations.jpg';



const Accordion = styled((props) => (
     <MuiAccordion disableGutters elevation={0} square {...props} />
   ))(({ theme }) => ({
     border: `1px solid ${theme.palette.divider}`,
     '&:not(:last-child)': {
       borderBottom: 0,
     },
     '&:before': {
       display: 'none',
     },
   }));
   
   const AccordionSummary = styled((props) => (
     <MuiAccordionSummary
       expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
       {...props}
     />
   ))(({ theme }) => ({
     backgroundColor:
       theme.palette.mode === 'dark'
         ? 'rgba(255, 255, 255, .05)'
         : 'rgba(0, 0, 0, .03)',
     flexDirection: 'row-reverse',
     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
       transform: 'rotate(90deg)',
     },
     '& .MuiAccordionSummary-content': {
       marginLeft: theme.spacing(1),
     },
   }));
   
   const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
     padding: theme.spacing(2),
     borderTop: '1px solid rgba(0, 0, 0, .125)',
   }));

const InfoAccordian = () => {

     const [expanded, setExpanded] = React.useState('panel1');

     const handleChange = (panel) => (event, newExpanded) => {
     setExpanded(newExpanded ? panel : false);
  };
     return (
        <Container sx={{marginTop: '160px', marginBottom:'80px'}}>
          <Box>
          <Typography sx={{textAlign:'center'}} variant="h4" gutterBottom component="div">
          <i className="fas cycleIcon fa-3x fa-biking"></i> READE SOME BASIC
         </Typography>
         </Box>


         <Grid container spacing={2}>
          
          <Grid sx={{marginTop:'120px'}} item xs={12} md={6}>
          <Box>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
               <Typography> <i className="fas cycleIcon fa-biking"></i> Cycling Basic Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
               <Typography>
               The start of a new year—and a new decade!—is the perfect time to think about new trips, tech, and trends that will change the way we ride. Every year at Bicycle Adventures, we scour the cycling landscape to make safe observations and bold predictions about what to expect in the coming 12 months.

               2021 promises to be an exciting year for cyclists. New tech will make riding safer and more exciting, and we predict this new year will really be the year of the e-bike (more on that below).

               As always, we’d love to know what you’re seeing on the road and in your cycle clubs; are our predictions on target or do you see things we need to add to our list? Be sure to let us know.

               But for now, here’s what we’re seeing in cycling 
               </Typography>
          </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
               <Typography>Wearable tech is in</Typography>
          </AccordionSummary>
          <AccordionDetails>
               <Typography>
               Cyclists have had a great selection of sports watches and fitness trackers for years, but in 2020, wearable tech takes it to the next level. The Garmin Fenix 6X Pro is a top-of-the-line pick for power geeks: It auto-syncs with Training Peaks and a bunch of other third-party apps like Strava and MyFitnessPal. With its huge selection of downloadable maps, built-in GPS and Glonass, altimeter, accelerometer, and a vast array of sensors, you could actually replace your bike computer with this wristband wearable. It also holds 2,000 songs and has an NFC chip for contactless payments.

               Then there’s the Hovding airbag, a device that zips in place around your neck and tracks your movements 200 times a minute. It detects any abnormalities in your ride—it knows the difference between curb bump and true accidents—and deploys in the event of a fall. It’s designed for urban riders and replaces your regular helmet.

               Finally, the Moov Now fitness tracker is an innovative fitness tracker/sports coach you wear around your ankle. It offers active coaching that gives you tips based on real-time pace, distance, time, range of motion in your legs, g-force in your foot, and cadence. You get audio feedback such as “change gear now for optimum cadence”. It gets top marks as a virtual training system.
               </Typography>
          </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
               <Typography>Foldable e-bikes transform the daily commute</Typography>
          </AccordionSummary>
          <AccordionDetails>
               <Typography>
               The clunky folding bikes of the 1970s bear no resemblance to today’s sleek, feature-packed foldable e-bikes. Besides collapsing down to an easily manageable size for public transportation or carrying it up and down a flight of steps, the new models even come in manageable weights—some weigh as little as 15 pounds. It’s now completely possible to origami your bike and stash it under your desk.

               We’ve seen e-bikes make huge inroads in the European market; the e-bike market is expected to triple in size over the next five years.
               </Typography>
          </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
               <Typography>Test bike racing: It’s a thing</Typography>
          </AccordionSummary>
          <AccordionDetails>
               <Typography>
               The clunky folding bikes of the 1970s bear no resemblance to today’s sleek, feature-packed foldable e-bikes. Besides collapsing down to an easily manageable size for public transportation or carrying it up and down a flight of steps, the new models even come in manageable weights—some weigh as little as 15 pounds. It’s now completely possible to origami your bike and stash it under your desk.

               We’ve seen e-bikes make huge inroads in the European market; the e-bike market is expected to triple in size over the next five years.
               </Typography>
          </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
               <Typography>Gravel bikes are the new all-rounders</Typography>
          </AccordionSummary>
          <AccordionDetails>
               <Typography>
               Racing and off-road hybrids have been around for years, but the addition of hydraulic disc brakes turned the old-style cyclocrosser into a modern, versatile gravel bike. The frame geometry means a more comfortable upright position, and the elevated bottom bracket means the chainring clears most obstacles. Burled tires slow gravel bikes down just a bit on asphalt, but they are greyhound fast compared to mountain bikes.
               </Typography>
          </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
               <Typography>Aesthetics overtakes over-the-top branding</Typography>
          </AccordionSummary>
          <AccordionDetails>
               <Typography>
               The bike-as-billboard has been a mainstay for decades with manufacturers slapping their branding on every tube. The in-your-face advertising is anything but subtle and some might say it detracts from the overall look of the bike.

               It seems some manufacturers are taking aesthetics seriously, and favoring style over abrasive branding. Take the new BMC Unrestricted gravel bike, for instance:
               </Typography>
          </AccordionDetails>
          </Accordion>
          </Box>
          </Grid>

          <Grid sx={{marginTop:'120px'}} item xs={12} md={6}>
          <CardMedia
               component="img"
               sx={{width:'100%'}}
               image={accoedianBg}
               alt="green iguana"
               />
          </Grid>
          </Grid>
        </Container>
     );
};

export default InfoAccordian;