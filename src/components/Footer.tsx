import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.frameHosting}>
        <div className={styles.frameLocalhost}>
          <div className={styles.coverForHosts}>
            <div className={styles.responsibilityInfo}>
              <h3 className={styles.support}>Support</h3>
              <div className={styles.helpCentre}>Help Centre</div>
              <div className={styles.aircover}>AirCover</div>
              <div className={styles.combatingDiscrimination}>
                Combating discrimination
              </div>
              <div className={styles.supportingPeopleWith}>
                Supporting people with disabilities
              </div>
              <div className={styles.cencellationOptions}>
                Cencellation options
              </div>
              <div className={styles.reportNeighbourhoodConcern}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.helpCentreInfo}>
              <h3 className={styles.hosting}>Hosting</h3>
              <div className={styles.localHome}>Local home</div>
              <div className={styles.coverForHosts1}>Cover for hosts</div>
              <div className={styles.hostingResources}>Hosting resources</div>
              <div className={styles.communityForum}>Community forum</div>
              <div className={styles.hostingResponsibly}>
                Hosting responsibly
              </div>
            </div>
            <div className={styles.helpCentreInfo1}>
              <h3 className={styles.localhost}>Localhost</h3>
              <div className={styles.newsroom}>Newsroom</div>
              <div className={styles.newFeatures}>New Features</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.investres}>Investres</div>
              <div className={styles.giftCards}>Gift cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.combatingDiscrimination1}>
        <div className={styles.supportingPeopleWithDisabil}>
          <div className={styles.privacyPolicyTermsContactus}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.termsConditions}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions1}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
