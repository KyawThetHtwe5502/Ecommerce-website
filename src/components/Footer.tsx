import Container from "./Container";
import { Input } from "./ui/input";
import {
  RiTwitterLine,
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";
function Footer() {
  return (
    <section className="bg-black">
      <Container>
        <div className="py-12">
          <div className="flex   items-start gap-x-4 justify-between text-text">
            {/* Exclusive */}
            <div>
              <div className="mb-4">
                <h4 className="text-2xl font-bold mb-6">Exclusive</h4>
                <span className="mb-6 text-xl font-medium inline-block">
                  Subscribe
                </span>
                <p className="text-sm">Get 10% off your first order</p>
              </div>
              <div>
                <Input
                  className="bg-opacity-0"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-xl font-medium mb-6">Support</h5>
              <ul className="space-y-4">
                <li className="text-sm w-44">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </li>
                <li className="text-sm">exclusive@gmail.com</li>
                <li className="text-sm">+88015-88888-9999</li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h5 className="text-xl font-medium mb-6">Account</h5>
              <ul className="space-y-4">
                <li className="text-sm">My Account</li>
                <li className="text-sm">Login / Register</li>
                <li className="text-sm">Cart</li>
                <li className="text-sm">Wishlist</li>
                <li className="text-sm">Shop</li>
              </ul>
            </div>

            {/* Quick Link */}
            <div>
              <h5 className="text-xl font-medium mb-6">Quick Link</h5>
              <ul className="space-y-4">
                <li className="text-sm">Privacy Policy</li>
                <li className="text-sm">Terms Of Use</li>
                <li className="text-sm">FAQ</li>
                <li className="text-sm">Contact</li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <div className="mb-6">
                <h5 className="text-xl font-medium mb-6">Download App</h5>
                <div>
                  <p className="text-sm mb-2">Save $3 with App New User Only</p>
                  <div className="flex items-center gap-2">
                    <img src="Qrcode.png" alt="" />
                    <div className="space-y-2">
                      <img
                        src="googleplaystore-logo.png"
                        alt="google-playstore"
                      />
                      <img src="apple-appstore.png" alt="apple" />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="flex items-center gap-x-4">
                <li className="text-2xl">
                  <RiFacebookLine />
                </li>
                <li className="text-2xl">
                  <RiTwitterLine />
                </li>
                <li className="text-2xl">
                  <RiInstagramLine />
                </li>
                <li className="text-2xl">
                  <RiLinkedinLine />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
