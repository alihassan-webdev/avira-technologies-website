import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <PageHero
        title="Privacy Policy"
        description="Our commitment to protecting your personal data and privacy"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Privacy Policy", path: "/privacy-policy" }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Privacy Policy Content */}
            <div className="space-y-10">
              {/* General Section */}
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">General</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  The following gives a simple overview of what kind of personal information we collect, why we collect them and how we handle your data when you are visiting or using our website. Personal information is any data with which you could be personally identified. Detailed information on the subject of data protection can be found in our privacy policy found below.
                </p>
              </div>

              {/* Data Collection Section */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 pb-4 border-b-2 border-red-600">Data Collection on Our Website</h3>
                <div className="space-y-6 mt-6">
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Who is Responsible for the Data Collection on This Website?</h4>
                    <p className="text-foreground leading-relaxed">
                      The data collected on this website are processed by the website operator. The operator's contact details can be found in the website's required legal notice.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">How Do We Collect Your Data?</h4>
                    <p className="text-foreground leading-relaxed mb-3">
                      Some data are collected when you provide them to us. This could, for example, be data you enter in a contact form.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Other data are collected automatically by our IT systems when you visit and use our website. These data are primarily technical data such as the browser and operating system you are using or when you accessed the website. These data are collected automatically as soon as you enter our website.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">What Do We Use Your Data For?</h4>
                    <p className="text-foreground leading-relaxed">
                      Part of the data is collected to ensure the proper functioning of the website. Other data can be used to analyze how visitors use the site.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">What Rights Do You Have Regarding Your Data?</h4>
                    <p className="text-foreground leading-relaxed">
                      You always have the right to request information about your stored data, its origin, its recipients, and the purpose of its collection at no charge. You also have the right to request that your data be corrected, blocked, or deleted. You can contact us at any time using the address given in the legal notice if you have further questions about the issue of privacy and data protection. You may also, of course, file a complaint with the competent regulatory authorities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Section */}
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Analytics and Third-Party Tools</h3>
                <p className="text-foreground leading-relaxed">
                  When visiting our website, statistical analyses may be made of your surfing behavior. This happens primarily using cookies and analytics. The analysis of your surfing behavior is usually anonymous, encrypted, and pseudonimized, meaning that we will not be able to identify you through this data. You can object to this analysis or prevent it by not using certain tools. Detailed information can be found in the following privacy policy.
                </p>
              </div>

              {/* General Information Section */}
              <div className="bg-secondary rounded-xl p-8 border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">General Information and Mandatory Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Data Protection</h4>
                    <p className="text-foreground leading-relaxed mb-3">
                      The operators of this website take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.
                    </p>
                    <p className="text-foreground leading-relaxed mb-3">
                      If you use this website, various kinds of personal data will be collected. Personal information is any data with which you could be personally identified. This privacy policy explains what information we collect and what we use it for. It also explains how and for what purpose this happens.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Please note that data transmitted via the internet (e.g. via email communication) may be subject to security breaches. Complete protection of your data from third-party access is not possible.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Notice Concerning the Party Responsible for This Website</h4>
                    <p className="text-foreground leading-relaxed">
                      The party responsible for processing data on this website is:
                    </p>
                    <p className="text-foreground leading-relaxed mt-2">
                      The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (names, email addresses, etc.).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Revocation of Your Consent to the Processing of Your Data</h4>
                    <p className="text-foreground leading-relaxed">
                      Many data processing operations are only possible with your express consent. You may revoke your consent at any time with future effect. An informal email making this request is sufficient. Please note that data processed before we receive your request may still be legally processed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Right to File Complaints with Regulatory Authorities</h4>
                    <p className="text-foreground leading-relaxed">
                      If there has been a breach of data protection legislation, the affected person may file a complaint with the competent regulatory authorities.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Right to Data Portability</h4>
                    <p className="text-foreground leading-relaxed">
                      You have the right to have data which we process based on your consent or in fulfillment of a contract automatically delivered to yourself or to a third party in a standard, machine-readable format. If you require the direct transfer of data to another responsible party, this will only be done to the extent technically feasible.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Encrypted Payments on This Website</h4>
                    <p className="text-foreground leading-relaxed mb-3">
                      If you enter into a contract which requires you to send us your payment information (e.g. account number for direct debits), we will require this data to process your payment.
                    </p>
                    <p className="text-foreground leading-relaxed mb-3">
                      Payment transactions using common means of payment (Visa/MasterCard, direct debit) are only made via encrypted SSL or TLS connections. You can recognize an encrypted connection in your browser's address line when it changes from "http://" to "https://" and the lock icon in your browser line is visible.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      In the case of encrypted communication, any payment details you submit to us cannot be read by third parties.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Information, Blocking, Deletion</h4>
                    <p className="text-foreground leading-relaxed">
                      As permitted by law, you have the right to be provided at any time with information free of charge about any of your personal data that is stored as well as its origin, the recipient and the purpose for which it has been processed. You also have the right to have your data be corrected, blocked or deleted. You can contact us at any time using the address given in our legal notice if you have further questions on the topic of personal data.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Opposition to Promotional Emails</h4>
                    <p className="text-foreground leading-relaxed">
                      We hereby expressly prohibit the use of contact data published in the context of website legal notice requirements with regard to sending promotional and informational materials not expressly requested. The website operator reserves the right to take specific legal action if unsolicited advertising material, such as email spam, is received.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies Section */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 pb-4 border-b-2 border-red-600">Cookies</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Some of our web pages use cookies. Cookies do not harm your computer and do not contain any viruses. Cookies help make our website more user-friendly, efficient, and secure. Cookies are small text files that are stored on your computer and saved by your browser.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Most of the cookies we use are so-called "session cookies." They are automatically deleted after your visit. Other cookies remain in your device's memory until you delete them. These cookies make it possible to recognize your browser when you next visit the site.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  You can configure your browser to inform you about the use of cookies so that you can decide on a case-by-case basis whether to accept or reject a cookie. Alternatively, your browser can be configured to automatically accept cookies under certain conditions or to always reject them, or to automatically delete cookies when closing your browser. Disabling cookies may limit the functionality of this website.
                </p>
                <p className="text-foreground leading-relaxed">
                  Cookies which are necessary to allow electronic communications or to provide certain functions you wish to use (such as the shopping cart) are stored pursuant to Art. 6 paragraph 1, letter f of the EU DSGVO/GDPR. The website operator has a legitimate interest in the storage of cookies to ensure an optimized service provided free of technical errors. If other cookies (such as those used to analyze your surfing behavior) are also stored, they will be treated separately in this privacy policy.
                </p>
              </div>

              {/* Server Log Files Section */}
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 pb-4 border-b-2 border-red-600">Server Log Files</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  The website provider automatically collects and stores information that your browser automatically transmits to us in "server log files". These are:
                </p>
                <ul className="list-disc list-inside text-foreground leading-relaxed space-y-2 mb-4">
                  <li>Browser type and browser version</li>
                  <li>Operating system used</li>
                  <li>Referrer URL</li>
                  <li>Hostname of the accessing computer</li>
                  <li>Time of server request</li>
                  <li>IP address</li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  These data will not be combined with data from other sources. The basis for data processing is Art. 6 (1) (f) of the EU DSGVOGDPR, which allows the processing of data to fulfill a contract or for measures preliminary to a contract.
                </p>
              </div>

              {/* Contact Form Section */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 pb-4 border-b-2 border-red-600">Contact Form</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Should you send us questions via contact form on our website, we will collect the data entered on in the form, including the contact details you provide, to answer your question and any follow-up questions. We do not share this information without your permission.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  We will, therefore, process any data you enter in the contact form only with your consent per Art. 6 (1) (a) of the EU DSGVOGDPR. You may revoke your consent at any time. An informal email making this request is sufficient. Data processed before we receive your request may still be legally processed.
                </p>
                <p className="text-foreground leading-relaxed">
                  We will retain the data you provide in the contact form until you request its deletion, revoke your consent for its storage, or the purpose for its storage no longer pertains (e.g. after fulfilling your request). Any mandatory statutory provisions, especially those regarding mandatory data retention periods, remain unaffected by this provision.
                </p>
              </div>

              {/* Processing of Data Section */}
              <div className="bg-secondary rounded-xl p-8 border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Processing of Data (Customer and Contract Data)</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  We collect, process, and use personal data only insofar as it is necessary to establish, or modify legal relationships with us (master data). This is done based on Art. 6 (1) (b) of the EU DSGVOGDPR, which allows the processing of data to fulfill a contract or for measures preliminary to a contract. We collect, process and use your personal data when accessing our website (usage data) only to the extent required to enable you to access our service or to bill you for the same.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Collected customer data shall be deleted after completion of the order or termination of the business relationship. Legal retention periods remain unaffected.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  We transmit personally identifiable data to third parties only to the extent required to fulfill the terms of your contract, for example, to companies entrusted to deliver goods to your location or banks entrusted to process your payments. Your data will not be transmitted for any other purpose unless you have given your express permission to do so. Your data will not be disclosed to third parties for advertising purposes without your express consent.
                </p>
                <p className="text-foreground leading-relaxed">
                  The basis for data processing is Art. 6 (1) (b) of the EU DSGVOGDPR, which allows the processing of data to fulfill a contract or for measures preliminary to a contract.
                </p>
              </div>

              {/* Analytics and Advertising Section */}
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 pb-4 border-b-2 border-red-600">Analytics and Advertising</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Matomo (Formerly Piwik)</h4>
                    <p className="text-foreground leading-relaxed mb-3">
                      This website uses the open source web analytics service Matomo. Matomo uses so-called "cookies". These are text files that are stored on your computer and that allow an analysis of the use of the website by you. For this purpose, the information generated by the cookie about the use of this website is stored on our server. The IP address is anonymized before it is stored.
                    </p>
                    <p className="text-foreground leading-relaxed mb-3">
                      Matomo cookies remain on your device until you delete them.
                    </p>
                    <p className="text-foreground leading-relaxed mb-3">
                      The storage of Matomo cookies is based on Art. 6 (1) (f) of the EU DSGVOGDPR. The website operator has a legitimate interest in analyzing user behavior in order to optimize both its website and its advertising.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      The information generated by the cookies about your use of this website will not be disclosed to third parties. You can prevent these cookies being stored by selecting the appropriate settings in your browser. However, we wish to point out that doing so may mean you will not be able to enjoy the full functionality of this website.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Newsletter</h4>
                    <p className="text-foreground leading-relaxed mb-3">
                      If you would like to receive our newsletter, we require a valid email address as well as information that allows us to verify that you are the owner of the specified email address and that you agree to receive this newsletter. No additional data is collected or is only collected on a voluntary basis. We only use this data to send the requested information and do not pass it on to third parties.
                    </p>
                    <p className="text-foreground leading-relaxed mb-3">
                      We will, therefore, process any data you enter in the contact form only with your consent per Art. 6 (1) (a) of the EU DSGVOGDPR. You can revoke consent to the storage of your data and email address as well as their use for sending the newsletter at any time, e.g. through the "unsubscribe" link in the newsletter. The data processed before we receive your request may still be legally processed.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      The data provided when registering for the newsletter will be used to distribute the newsletter until you cancel your subscription when said data will be deleted. Data we have stored for other purposes (e.g. email addresses for the members area) remain unaffected.
                    </p>
                  </div>
                </div>
              </div>

              {/* Plugins and Tools Section */}
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 pb-4 border-b-2 border-red-600">Plugins and Tools</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Google Maps</h4>
                    <p className="text-foreground leading-relaxed mb-3">
                      This site uses the Google Maps map service via an API. It is operated by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
                    </p>
                    <p className="text-foreground leading-relaxed mb-3">
                      To use Google Maps, it is necessary to save your IP address. This information is generally transmitted to a Google server in the USA and stored there. The provider of this site has no influence over this data transfer.
                    </p>
                    <p className="text-foreground leading-relaxed mb-3">
                      The use of Google Maps is in the interest of making our website appealing and to facilitate the location of places specified by us on the website. This constitutes a justified interest pursuant to Art. 6 (1) (f) of the EU DSGVOGDPR.
                    </p>
                    <p className="text-foreground leading-relaxed">
                      Further information about handling user data, can be found in the data protection declaration of Google at{" "}
                      <a
                        href="https://www.google.de/intl/de/policies/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-semibold transition-colors"
                      >
                        https://www.google.de/intl/de/policies/privacy/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button at Bottom */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                to="/"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-gray-200 text-foreground font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
