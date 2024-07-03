import { Outlet, Link } from "react-router-dom";
import ASBSVG from "../../assets/ASB-SVG.svg";
import styles from "./Layout.module.css";
import { useLogin } from "../../authConfig";
import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <a href="/" className={styles.headerTitleContainer}>
                        <h3 className={styles.headerTitle}>ASB Mentis</h3>
                    </a>
                    <div className={styles.headerLogoContainer}>
                        <a href="https://asb.edu.my" target="_blank" rel="noopener noreferrer" title="Visit Asia School of Business">
                            <img
                                src={ASBSVG}
                                alt="ASB logo"
                                aria-label="Link to ASB Homepage"
                                className={styles.githubLogo}
                            />
                        </a>
                    </div>
                    <div className={styles.headerRightTextContainer}>
                        <h4 className={styles.headerRightText}>Knowledge on Tap</h4>
                        {useLogin && <LoginButton />}
                    </div>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;


