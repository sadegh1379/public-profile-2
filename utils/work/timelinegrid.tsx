import Image from 'next/image'
import {
  nobleLogo,
  usLogo,
  waskoLogo
} from '../../assets'
import { getDate } from '../date'
import styles from './timelinegrid.module.scss'

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2020</h1>
        <div className={styles.timelinePoint}/>
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>
          Hover to zoom.
        </h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="University of Silesia logo."
                src="https://phdyar.ir/wp-content/uploads/2017/05/1930331.jpg"
                height={50}
                width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Razi University</h1>
              <h2 className={styles.cardContentDetails}>Katowice</h2>
              <h2 className={styles.cardContentDetails}>10.2020 - 03.2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Modules included:<br/>
            1st Year: Mathematical Analysis, Basic Course of C++ Programming Language.<br/>
            2nd Year: Operating Systems, Computer Networks.<br/>
            3rd Year: Advanced Course of C++ Programming Language, Using
            C# to Design Graphic Applications, The Basics of Building of Neural Network.<br/>
            4th Year: Computer Simulation Methods, Oracle Databases.<br/>
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <h1>03.2021 - 03.2022</h1>
        <h2>Working & learning Web Development</h2>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Wasko company logo."
                src="https://snjab.ir/asset/logo/android-icon-192x192.png"
                height={13}
                width={55}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Snjab.ir</h1>
              <h2 className={styles.cardContentDetails}>Tehran</h2>
              <h2 className={styles.cardContentDetails}>03.2020 - 3.2021</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building on my own a responsive web application with react js,
            which had a catalogue of all company's servers, displayed in the
            tree structure. Server's data was taken and parsed from XML file to JSON.
            Anyone logged could browse through lists of servers.
            Search and sort by name function were applied.
            App had system of accounts as well. Admins, technical and user ones.
            Admins could manage accounts by editing them, deleting and authorize
            (every new user had to be authorized by admin). Admins could also
            see what user is logged at the moment.<br/>
            <br/>
            Main responsibilities:<br/>
            - designing both frontend side of the app,<br/>
            - creating an asynchronous communication between client and server via <b>REST API</b>,<br/>
            <br/>
            Languages: JavaScript, <b>React</b>.<br/>
            Styling: Ant Design UI, CSS.<br/>
            Version Control System: <b>GitHub.</b><br/>
            Issue trancing: Trello.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} style={{backgroundColor: "#0E2245"}}>
              <Image
                alt="Noble Systems company logo."
                src="https://media.ana.press/old/1399/02/01/637229395325126944_lg.jpg"
                height={50}
                width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Aiex.app</h1>
              <h2 className={styles.cardContentDetails}>tehran</h2>
              <h2 className={styles.cardContentDetails}>10.2021 - 02.2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
          Building on my own a responsive web application with react js,
            which had a catalogue of all company's servers, displayed in the
            tree structure. Server's data was taken and parsed from XML file to JSON.
            Anyone logged could browse through lists of servers.
            Search and sort by name function were applied.
            App had system of accounts as well. Admins, technical and user ones.
            Admins could manage accounts by editing them, deleting and authorize
            (every new user had to be authorized by admin). Admins could also
            see what user is logged at the moment.<br/>
            <br/>
            Main responsibilities:<br/>
            - designing both frontend side of the app,<br/>
            - creating an asynchronous communication between client and server via <b>REST API</b>,<br/>
            <br/>
            Languages: JavaScript, <b>React</b>.<br/>
            Styling: Ant Design UI, CSS.<br/>
            Version Control System: <b>GitHub.</b><br/>
            Issue trancing: Trello.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint}/>
        <h1>{getDate()}</h1>
      </div>
    </div>
  )
}