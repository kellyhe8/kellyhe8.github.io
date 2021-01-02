// import FontTest from "../FontTest.js"
// import React from "react";
// import { useTheme } from "@material-ui/core/styles";
// import { withStyles } from "@material-ui/core/styles";
// import { Typography, Box } from "@material-ui/core";

// const styles = (theme) => ({
//   header: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "500px",
//     padding: "2rem",
//     margin: "0 0 1rem 0",
//     justifyContent: "flex-end",
//   },
// });

// const BlogPost5 = (props) => {
//   const { classes } = props;
//   const theme = useTheme();

//   return (
//     <>
//       <Box
//         className={classes.header}
//         style={{ background: `url(${props.image}) no-repeat center center` }}
//       >
//         <Typography variant="h2">{props.title}</Typography>
//         <Typography variant="h5">{props.subtitle}</Typography>
//       </Box>

//       <Typography
//         variant="body1"
//         style={{
//           color: theme.palette.primary.light,
//           lineHeight: "1.5rem",
//           padding: "0 0 .5rem 0",
//           borderBottom: `1px ${theme.palette.primary.light} solid`,
//           margin: "0 0 1rem 0",
//         }}
//       >
//         {props.date}
//       </Typography>
//     </>
//   );
// };

// export default withStyles(styles)(BlogPost5);


import React, { Component } from "react";
import Navbar from "../navmenu/Navbar";
import Contact from "../Contact";
import { withStyles } from "@material-ui/core/styles";
import BlogPostTemplate from "./BlogPostTemplate";
import backgroundImg from "../../img/fonts.svg";
import { Typography, Box, Link } from "@material-ui/core";
// import { useTheme } from "@material-ui/core/styles";

const styles = (theme) => ({
  contentArea: {
    margin: "0 auto 5rem auto",
    width: "60%",
    [theme.breakpoints.down("xl")]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  paragraphTitle: {
    lineHeight: "3rem",
    margin: "0 0 1rem 0",
  },
  paragraphContent: {
    lineHeight: "2rem",
    margin: "0 1rem 1rem 1rem",
    textAlign: "justify",
  },
  signature: {
    // textAlign: "right",
    margin: "0 5rem 0 0",
  },
  listLink: {
    color: theme.palette.accent1.main
  }
});

class BlogPost1 extends Component {
  render() {
    const { classes } = this.props;
    // const theme = useTheme();

    return (
      <>
        <Navbar />
        <Box className={classes.contentArea}>
          <BlogPostTemplate
            title='Font Families Reference'
            subtitle='A reference of React font families'
            date="January 1, 2021 - 7:15 PM"
            image={backgroundImg}
          />
          <Typography variant="body1" className={classes.paragraphContent}>
            This is just going to be every react font family grouped by iOS and Android for easy reference.
            Let me know if there are any I missed and what your favorite is! I'm using Avenir-Medium right now.
            <Link
              href="https://github.com/react-native-training/react-native-fonts"
              variant="body1"
              className={classes.listLink}
            > Adapted from here.</Link>
          </Typography>
          <Typography variant="h5" className={classes.paragraphTitle}>
            IOS Fonts
          </Typography>
          <Box margin="0 0 0 2rem">
            <Typography style={{ fontSize: '2rem', fontFamily: 'Academy Engraved LET' }}>Academy Engraved LET </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AcademyEngravedLetPlain' }}>AcademyEngravedLetPlain </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Al Nile' }}>Al Nile </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AlNile-Bold' }}>AlNile-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'American Typewriter' }}>American Typewriter </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AmericanTypewriter-Bold' }}>AmericanTypewriter-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AmericanTypewriter-Condensed' }}>AmericanTypewriter-Condensed </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AmericanTypewriter-CondensedBold' }}>AmericanTypewriter-CondensedBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AmericanTypewriter-CondensedLight' }}>AmericanTypewriter-CondensedLight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AmericanTypewriter-Light' }}>AmericanTypewriter-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Apple Color Emoji' }}>Apple Color Emoji </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Apple SD Gothic Neo' }}>Apple SD Gothic Neo </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AppleColorEmoji' }}>AppleColorEmoji </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AppleSDGothicNeo-Bold' }}>AppleSDGothicNeo-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AppleSDGothicNeo-Light' }}>AppleSDGothicNeo-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AppleSDGothicNeo-Medium' }}>AppleSDGothicNeo-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AppleSDGothicNeo-Regular' }}>AppleSDGothicNeo-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AppleSDGothicNeo-SemiBold' }}>AppleSDGothicNeo-SemiBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AppleSDGothicNeo-Thin' }}>AppleSDGothicNeo-Thin </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AppleSDGothicNeo-UltraLight' }}>AppleSDGothicNeo-UltraLight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Arial' }}>Arial </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Arial Hebrew' }}>Arial Hebrew </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Arial Rounded MT Bold' }}>Arial Rounded MT Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Arial-BoldItalicMT' }}>Arial-BoldItalicMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Arial-BoldMT' }}>Arial-BoldMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Arial-ItalicMT' }}>Arial-ItalicMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ArialHebrew' }}>ArialHebrew </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ArialHebrew-Bold' }}>ArialHebrew-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ArialHebrew-Light' }}>ArialHebrew-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ArialMT' }}>ArialMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ArialRoundedMTBold' }}>ArialRoundedMTBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir' }}>Avenir </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir Next' }}>Avenir Next </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir Next Condensed' }}>Avenir Next Condensed </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-Black' }}>Avenir-Black </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-BlackOblique' }}>Avenir-BlackOblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-Book' }}>Avenir-Book </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-BookOblique' }}>Avenir-BookOblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-Heavy' }}>Avenir-Heavy </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-HeavyOblique' }}>Avenir-HeavyOblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-Light' }}>Avenir-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-LightOblique' }}>Avenir-LightOblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-Medium' }}>Avenir-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-MediumOblique' }}>Avenir-MediumOblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-Oblique' }}>Avenir-Oblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Avenir-Roman' }}>Avenir-Roman </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-Bold' }}>AvenirNext-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-BoldItalic' }}>AvenirNext-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-DemiBold' }}>AvenirNext-DemiBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-DemiBoldItalic' }}>AvenirNext-DemiBoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-Heavy' }}>AvenirNext-Heavy </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-HeavyItalic' }}>AvenirNext-HeavyItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-Italic' }}>AvenirNext-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-Medium' }}>AvenirNext-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-MediumItalic' }}>AvenirNext-MediumItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-Regular' }}>AvenirNext-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-UltraLight' }}>AvenirNext-UltraLight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNext-UltraLightItalic' }}>AvenirNext-UltraLightItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-Bold' }}>AvenirNextCondensed-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-BoldItalic' }}>AvenirNextCondensed-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-DemiBold' }}>AvenirNextCondensed-DemiBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-DemiBoldItalic' }}>AvenirNextCondensed-DemiBoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-Heavy' }}>AvenirNextCondensed-Heavy </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-HeavyItalic' }}>AvenirNextCondensed-HeavyItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-Italic' }}>AvenirNextCondensed-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-Medium' }}>AvenirNextCondensed-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-MediumItalic' }}>AvenirNextCondensed-MediumItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-Regular' }}>AvenirNextCondensed-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-UltraLight' }}>AvenirNextCondensed-UltraLight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'AvenirNextCondensed-UltraLightItalic' }}>AvenirNextCondensed-UltraLightItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Bangla Sangam MN' }}>Bangla Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Baskerville' }}>Baskerville </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Baskerville-Bold' }}>Baskerville-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Baskerville-BoldItalic' }}>Baskerville-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Baskerville-Italic' }}>Baskerville-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Baskerville-SemiBold' }}>Baskerville-SemiBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Baskerville-SemiBoldItalic' }}>Baskerville-SemiBoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Bodoni 72' }}>Bodoni 72 </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Bodoni 72 Oldstyle' }}>Bodoni 72 Oldstyle </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Bodoni 72 Smallcaps' }}>Bodoni 72 Smallcaps </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Bodoni Ornaments' }}>Bodoni Ornaments </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'BodoniOrnamentsITCTT' }}>BodoniOrnamentsITCTT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'BodoniSvtyTwoITCTT-Bold' }}>BodoniSvtyTwoITCTT-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'BodoniSvtyTwoITCTT-Book' }}>BodoniSvtyTwoITCTT-Book </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'BodoniSvtyTwoITCTT-BookIta' }}>BodoniSvtyTwoITCTT-BookIta </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'BodoniSvtyTwoOSITCTT-Bold' }}>BodoniSvtyTwoOSITCTT-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'BodoniSvtyTwoOSITCTT-Book' }}>BodoniSvtyTwoOSITCTT-Book </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'BodoniSvtyTwoSCITCTT-Book' }}>BodoniSvtyTwoSCITCTT-Book </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Bradley Hand' }}>Bradley Hand </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'BradleyHandITCTT-Bold' }}>BradleyHandITCTT-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Chalkboard SE' }}>Chalkboard SE </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ChalkboardSE-Bold' }}>ChalkboardSE-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ChalkboardSE-Light' }}>ChalkboardSE-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ChalkboardSE-Regular' }}>ChalkboardSE-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Chalkduster' }}>Chalkduster </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Chalkduster' }}>Chalkduster </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Cochin' }}>Cochin </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Cochin-Bold' }}>Cochin-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Cochin-BoldItalic' }}>Cochin-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Cochin-Italic' }}>Cochin-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Copperplate' }}>Copperplate </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Copperplate-Bold' }}>Copperplate-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Copperplate-Light' }}>Copperplate-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Courier' }}>Courier </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Courier New' }}>Courier New </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Courier-Bold' }}>Courier-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Courier-BoldOblique' }}>Courier-BoldOblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Courier-Oblique' }}>Courier-Oblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'CourierNewPS-BoldItalicMT' }}>CourierNewPS-BoldItalicMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'CourierNewPS-BoldMT' }}>CourierNewPS-BoldMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'CourierNewPS-ItalicMT' }}>CourierNewPS-ItalicMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'CourierNewPSMT' }}>CourierNewPSMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Damascus' }}>Damascus </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'DamascusBold' }}>DamascusBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'DamascusLight' }}>DamascusLight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'DamascusMedium' }}>DamascusMedium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'DamascusSemiBold' }}>DamascusSemiBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Devanagari Sangam MN' }}>Devanagari Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'DevanagariSangamMN' }}>DevanagariSangamMN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'DevanagariSangamMN-Bold' }}>DevanagariSangamMN-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Didot' }}>Didot </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Didot-Bold' }}>Didot-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Didot-Italic' }}>Didot-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'DiwanMishafi' }}>DiwanMishafi </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Euphemia UCAS' }}>Euphemia UCAS </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'EuphemiaUCAS-Bold' }}>EuphemiaUCAS-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'EuphemiaUCAS-Italic' }}>EuphemiaUCAS-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Farah' }}>Farah </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Futura' }}>Futura </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Futura-CondensedExtraBold' }}>Futura-CondensedExtraBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Futura-CondensedMedium' }}>Futura-CondensedMedium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Futura-Medium' }}>Futura-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Futura-MediumItalic' }}>Futura-MediumItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Geeza Pro' }}>Geeza Pro </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GeezaPro-Bold' }}>GeezaPro-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Georgia' }}>Georgia </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Georgia-Bold' }}>Georgia-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Georgia-BoldItalic' }}>Georgia-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Georgia-Italic' }}>Georgia-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Gill Sans' }}>Gill Sans </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GillSans-Bold' }}>GillSans-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GillSans-BoldItalic' }}>GillSans-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GillSans-Italic' }}>GillSans-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GillSans-Light' }}>GillSans-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GillSans-LightItalic' }}>GillSans-LightItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GillSans-SemiBold' }}>GillSans-SemiBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GillSans-SemiBoldItalic' }}>GillSans-SemiBoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GillSans-UltraBold' }}>GillSans-UltraBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Gujarati Sangam MN' }}>Gujarati Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GujaratiSangamMN' }}>GujaratiSangamMN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GujaratiSangamMN-Bold' }}>GujaratiSangamMN-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Gurmukhi MN' }}>Gurmukhi MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'GurmukhiMN-Bold' }}>GurmukhiMN-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Heiti SC' }}>Heiti SC </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Heiti TC' }}>Heiti TC </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Helvetica' }}>Helvetica </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Helvetica Neue' }}>Helvetica Neue </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Helvetica-Bold' }}>Helvetica-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Helvetica-BoldOblique' }}>Helvetica-BoldOblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Helvetica-Light' }}>Helvetica-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Helvetica-LightOblique' }}>Helvetica-LightOblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Helvetica-Oblique' }}>Helvetica-Oblique </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-Bold' }}>HelveticaNeue-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-BoldItalic' }}>HelveticaNeue-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-CondensedBlack' }}>HelveticaNeue-CondensedBlack </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-CondensedBold' }}>HelveticaNeue-CondensedBold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-Italic' }}>HelveticaNeue-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-Light' }}>HelveticaNeue-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-LightItalic' }}>HelveticaNeue-LightItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-Medium' }}>HelveticaNeue-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-MediumItalic' }}>HelveticaNeue-MediumItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-Thin' }}>HelveticaNeue-Thin </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-ThinItalic' }}>HelveticaNeue-ThinItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-UltraLight' }}>HelveticaNeue-UltraLight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HelveticaNeue-UltraLightItalic' }}>HelveticaNeue-UltraLightItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Hiragino Mincho ProN' }}>Hiragino Mincho ProN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Hiragino Sans' }}>Hiragino Sans </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HiraginoSans-W3' }}>HiraginoSans-W3 </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HiraginoSans-W6' }}>HiraginoSans-W6 </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HiraMinProN-W3' }}>HiraMinProN-W3 </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HiraMinProN-W6' }}>HiraMinProN-W6 </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Hoefler Typography' }}>Hoefler Typography </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HoeflerTypography-Black' }}>HoeflerTypography-Black </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HoeflerTypography-BlackItalic' }}>HoeflerTypography-BlackItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HoeflerTypography-Italic' }}>HoeflerTypography-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'HoeflerTypography-Regular' }}>HoeflerTypography-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Iowan Old Style' }}>Iowan Old Style </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'IowanOldStyle-Bold' }}>IowanOldStyle-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'IowanOldStyle-BoldItalic' }}>IowanOldStyle-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'IowanOldStyle-Italic' }}>IowanOldStyle-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'IowanOldStyle-Roman' }}>IowanOldStyle-Roman </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Kailasa' }}>Kailasa </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Kailasa-Bold' }}>Kailasa-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Kannada Sangam MN' }}>Kannada Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KannadaSangamMN' }}>KannadaSangamMN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KannadaSangamMN-Bold' }}>KannadaSangamMN-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Khmer Sangam MN' }}>Khmer Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Kohinoor Bangla' }}>Kohinoor Bangla </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Kohinoor Devanagari' }}>Kohinoor Devanagari </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Kohinoor Telugu' }}>Kohinoor Telugu </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorBangla-Light' }}>KohinoorBangla-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorBangla-Regular' }}>KohinoorBangla-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorBangla-Semibold' }}>KohinoorBangla-Semibold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorDevanagari-Light' }}>KohinoorDevanagari-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorDevanagari-Regular' }}>KohinoorDevanagari-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorDevanagari-Semibold' }}>KohinoorDevanagari-Semibold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorTelugu-Light' }}>KohinoorTelugu-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorTelugu-Medium' }}>KohinoorTelugu-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'KohinoorTelugu-Regular' }}>KohinoorTelugu-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Lao Sangam MN' }}>Lao Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Malayalam Sangam MN' }}>Malayalam Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'MalayalamSangamMN' }}>MalayalamSangamMN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'MalayalamSangamMN-Bold' }}>MalayalamSangamMN-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Marker Felt' }}>Marker Felt </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'MarkerFelt-Thin' }}>MarkerFelt-Thin </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'MarkerFelt-Wide' }}>MarkerFelt-Wide </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Menlo' }}>Menlo </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Menlo-Bold' }}>Menlo-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Menlo-BoldItalic' }}>Menlo-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Menlo-Italic' }}>Menlo-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Menlo-Regular' }}>Menlo-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Mishafi' }}>Mishafi </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Noteworthy' }}>Noteworthy </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Noteworthy-Bold' }}>Noteworthy-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Noteworthy-Light' }}>Noteworthy-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Optima' }}>Optima </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Optima-Bold' }}>Optima-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Optima-BoldItalic' }}>Optima-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Optima-ExtraBlack' }}>Optima-ExtraBlack </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Optima-Italic' }}>Optima-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Optima-Regular' }}>Optima-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Oriya Sangam MN' }}>Oriya Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'OriyaSangamMN' }}>OriyaSangamMN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'OriyaSangamMN-Bold' }}>OriyaSangamMN-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Palatino' }}>Palatino </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Palatino-Bold' }}>Palatino-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Palatino-BoldItalic' }}>Palatino-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Palatino-Italic' }}>Palatino-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Palatino-Roman' }}>Palatino-Roman </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Papyrus' }}>Papyrus </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Papyrus-Condensed' }}>Papyrus-Condensed </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Party LET' }}>Party LET </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PartyLetPlain' }}>PartyLetPlain </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFang HK' }}>PingFang HK </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFang SC' }}>PingFang SC </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFang TC' }}>PingFang TC </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangHK-Light' }}>PingFangHK-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangHK-Medium' }}>PingFangHK-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangHK-Regular' }}>PingFangHK-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangHK-Semibold' }}>PingFangHK-Semibold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangHK-Thin' }}>PingFangHK-Thin </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangHK-Ultralight' }}>PingFangHK-Ultralight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangSC-Light' }}>PingFangSC-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangSC-Medium' }}>PingFangSC-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangSC-Regular' }}>PingFangSC-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangSC-Semibold' }}>PingFangSC-Semibold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangSC-Thin' }}>PingFangSC-Thin </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangSC-Ultralight' }}>PingFangSC-Ultralight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangTC-Light' }}>PingFangTC-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangTC-Medium' }}>PingFangTC-Medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangTC-Regular' }}>PingFangTC-Regular </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangTC-Semibold' }}>PingFangTC-Semibold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangTC-Thin' }}>PingFangTC-Thin </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'PingFangTC-Ultralight' }}>PingFangTC-Ultralight </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Savoye LET' }}>Savoye LET </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'SavoyeLetPlain' }}>SavoyeLetPlain </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Sinhala Sangam MN' }}>Sinhala Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'SinhalaSangamMN' }}>SinhalaSangamMN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'SinhalaSangamMN-Bold' }}>SinhalaSangamMN-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Snell Roundhand' }}>Snell Roundhand </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'SnellRoundhand-Black' }}>SnellRoundhand-Black </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'SnellRoundhand-Bold' }}>SnellRoundhand-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Symbol' }}>Symbol </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Tamil Sangam MN' }}>Tamil Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'TamilSangamMN-Bold' }}>TamilSangamMN-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Telugu Sangam MN' }}>Telugu Sangam MN </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Thonburi' }}>Thonburi </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Thonburi-Bold' }}>Thonburi-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Thonburi-Light' }}>Thonburi-Light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Times New Roman' }}>Times New Roman </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'TimesNewRomanPS-BoldItalicMT' }}>TimesNewRomanPS-BoldItalicMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'TimesNewRomanPS-BoldMT' }}>TimesNewRomanPS-BoldMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'TimesNewRomanPS-ItalicMT' }}>TimesNewRomanPS-ItalicMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'TimesNewRomanPSMT' }}>TimesNewRomanPSMT </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Trebuchet MS' }}>Trebuchet MS </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Trebuchet-BoldItalic' }}>Trebuchet-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'TrebuchetMS-Bold' }}>TrebuchetMS-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'TrebuchetMS-Italic' }}>TrebuchetMS-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Verdana' }}>Verdana </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Verdana-Bold' }}>Verdana-Bold </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Verdana-BoldItalic' }}>Verdana-BoldItalic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Verdana-Italic' }}>Verdana-Italic </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Zapf Dingbats' }}>Zapf Dingbats </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'ZapfDingbatsITC' }}>ZapfDingbatsITC </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Zapfino' }}>Zapfino </Typography>
          </Box>
          <Typography variant="h5" className={classes.paragraphTitle}>
            Android Fonts
          </Typography>
          <Box margin="0 0 0 2rem">
            <Typography style={{ fontSize: '2rem', fontFamily: 'normal' }}>  normal </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'notoserif' }}>  notoserif </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'sans-serif' }}>  sans-serif </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'sans-serif-light' }}>  sans-serif-light </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'sans-serif-thin' }}>  sans-serif-thin </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'sans-serif-condensed' }}>  sans-serif-condensed </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'sans-serif-medium' }}>  sans-serif-medium </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'serif' }}>  serif </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'Roboto' }}>  Roboto </Typography>
            <Typography style={{ fontSize: '2rem', fontFamily: 'monospace' }}>  monospace </Typography>
          </Box>

          <Typography variant="h6" className={classes.signature}>
            Cheerio, <br />
            Kelly
          </Typography>
        </Box>
        <Contact />
      </>
    );
  }
}

export default withStyles(styles)(BlogPost1);
