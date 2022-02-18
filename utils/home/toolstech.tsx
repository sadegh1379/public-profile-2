import React from 'react'
import { VIcon } from '../icon'
import {
  affinityLogo,
  affinityLogoHover,
  angularLogo,
  angularLogoHover,
  cssLogo,
  cssLogoHover,
  davinciLogo,
  davinciLogoHover,
  gitLogo,
  gitLogoHover,
  htmlLogo,
  htmlLogoHover,
  jestLogo,
  jestLogoHover,
  jsLogo,
  jsLogoHover,
  lessLogo,
  lessLogoHover,
  linuxLogo,
  linuxLogoHover,
  mysqlLogo,
  mysqlLogoHover,
  npmLogo,
  npmLogoHover,
  pythonLogo,
  pythonLogoHover,
  reactLogo,
  reactLogoHover,
  sassLogo,
  sassLogoHover,
  tsLogo,
  tsLogoHover,
  vsLogo,
  vsLogoHover,
  windowsLogo,
  windowsLogoHover,
  yarnLogo,
  yarnLogoHover,
  nextLogo,
  reactNativeLogo,
  apiLogo
} from '../../assets'
import styles from './toolstech.module.scss'

export function VToolsTech() {
  return (
    <div className={styles.technologiesIcons}>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={htmlLogo}
          onHoverIcon={htmlLogoHover}
          height="46px"
          width="46px"
          name="HTML"
          tooltipID="html-tooltip" />
        <VIcon
          defaulIcon={cssLogo}
          onHoverIcon={cssLogoHover}
          height="65px"
          width="65px"
          name="CSS"
          tooltipID="css-tooltip" />
        <VIcon
          defaulIcon={jsLogo}
          onHoverIcon={jsLogoHover}
          height="55px"
          width="55px"
          name="JavaScript"
          tooltipID="js-tooltip" />
        <VIcon
          defaulIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height="55px"
          width="55px"
          name="React"
          tooltipID="react-tooltip" />
        <VIcon
          defaulIcon={tsLogo}
          onHoverIcon={tsLogoHover}
          height="65px"
          width="65px"
          name="TypeScript"
          tooltipID="ts-tooltip" />
        <VIcon
          defaulIcon={sassLogo}
          onHoverIcon={sassLogoHover}
          height="60px"
          width="60px"
          name="Sass"
          tooltipID="sass-tooltip" />
        <VIcon
          defaulIcon={lessLogo}
          onHoverIcon={lessLogoHover}
          height="65px"
          width="65px"
          name="Less"
          tooltipID="less-tooltip" />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={npmLogo}
          onHoverIcon={npmLogoHover}
          height="65px"
          width="65px"
          name="Node Package Manager"
          tooltipID="npm-tooltip" />
        <VIcon
          defaulIcon={yarnLogo}
          onHoverIcon={yarnLogoHover}
          height="65px"
          width="65px"
          name="yarn"
          tooltipID="yarn-tooltip" />
        <VIcon
          defaulIcon={gitLogo}
          onHoverIcon={gitLogoHover}
          height="65px"
          width="65px"
          name="Git"
          tooltipID="git-tooltip" />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={vsLogo}
          onHoverIcon={vsLogoHover}
          height="50px"
          width="50px"
          name="Visual Studio Code"
          tooltipID="vs-tooltip" />
        <VIcon
          defaulIcon={windowsLogo}
          onHoverIcon={windowsLogoHover}
          height="50px"
          width="50px"
          name="Windows 10"
          tooltipID="windows-tooltip" />
           <VIcon
          defaulIcon={nextLogo}
          onHoverIcon={nextLogo}
          height="50px"
          width="50px"
          name="next js"
          tooltipID="nextjs-tooltip" />
            <VIcon
          defaulIcon={reactNativeLogo}
          onHoverIcon={reactNativeLogo}
          height="50px"
          width="50px"
          name="react native"
          tooltipID="reactnative-tooltip" />
           <VIcon
          defaulIcon={apiLogo}
          onHoverIcon={apiLogo}
          height="50px"
          width="50px"
          name="rest api"
          tooltipID="restapi-tooltip" />
      </div>
    </div>
  )
}
