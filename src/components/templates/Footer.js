export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-11 lg:py-32 flex items-center justify-center bg-transparent relative"
    >
      <div className="px-9 lg:px-[150px] lg:ms-24 items-center relative z-20">
        <div className="lg:ps-12">
          <div className="content">
            <div className="content-wrapper grid grid-cols-1 lg:grid-cols-3 gap-11 lg:gap-24">
              <div className="right">
                <img src="/images/logo-light.png" className="w-44 mb-11" />
                <p className="text-sm">
                  Fowardin is your ultimate communication management solution.
                  We empower businesses of all sizes with efficient message
                  forwarding, streamlined contact management, and powerful
                  campaign scheduling. Our mission is to simplify your
                  communication processes, helping you engage with your audience
                  effectively and effortlessly. Join us in transforming your
                  communication game today!
                </p>
              </div>
              <div className="middle">
                <h6 className="text-xl font-bold mb-5">Conctact Us</h6>
                <p className="text-sm">
                  Join our mailing list to receive updates, exclusive content,
                  and early access to upcoming events. By signing up, you become
                  an integral part of our community, spreading the message of
                  compassion and making a difference.
                </p>
                <div className="contact mt-5">
                  <p className="text-sm">Email: info@fowarin</p>
                  <p className="text-sm">
                    Email: info@fowarin Phone: +1 (123) 456-7890
                  </p>
                </div>
              </div>
              <div className="middle">
                <h6 className="text-xl font-bold mb-5">Lets Talk</h6>

                <div className="link flex flex-col mt-5">
                  <a href="#" className="text-sm">
                    Facebook
                  </a>
                  <a href="#" className="text-sm">
                    Instagram
                  </a>
                  <a href="#" className="text-sm">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
