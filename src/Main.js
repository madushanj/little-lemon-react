function Main() {
  return (
    <main>
      <div className="section-hero">
        <div className="fb-text">
          <div className="title">
            Little Lemon Restaurant
          </div>
          <div className="sub-title">
            Los Angeles
          </div>
          <div className="description">
            At Little Lemon, we offer a variety of delicious dishes that are sure to please anyone’s palate. Our menu features classic American cuisine as well as some modern twists on traditional recipes. We specialize in sandwiches, burgers, salads, and seafood dishes, plus we have a fantastic selection of sides, desserts, and drinks to choose from.
          </div>
          <div className="button">
            <button type="button" className="btn btn-dark">Reserve a Table</button>
          </div>
        </div>
        <div className="fb-img">
          <img src="restaurant-chef-B.jpg" alt="restaurant-chef-B" />
        </div>
      </div>
      <div className="section-highlights">
        <div className="heading">
          <p>Today’s Specials</p>
          <button type="button" className="btn btn-dark">Online Menu</button>
        </div>
        <div className="cards">
          <div className="card">
            <img src="card1.png" className="card-img-top" alt="Seafood paella" />
            <div className="card-body">
              <div className="card-heading">
                <p className="card-title">Seafood paella</p>
                <p className="card-price">$ 5.99</p>
              </div>
              <p className="card-disc">
                The sea is lapping just by your feet, a warm breeze whips the tablecloth around your legs and a steamy pan of paella sits in front of you. Shrimp, lobster, mussels and cuttlefish combine with white rice and various herbs, oil and salt in this Valencian dish to send you immediately into holiday mode.
              </p>
              <a href="#" className="card-hlink">Order for Delivery</a>
            </div>
          </div>
          <div className="card">
            <img src="card2.png" className="card-img-top" alt="Stinky tofu" />
            <div className="card-body">
              <div className="card-heading">
                <p className="card-title">Stinky tofu</p>
                <p className="card-price">$ 3.99</p>
              </div>
              <p className="card-disc">
                Nothing really prepares you for the stench of one of the strangest dishes on Earth. Like durian, smelly tofu is one of Southeast Asia’s most iconic foods. The odor of fermenting tofu is so overpowering many aren’t able to shake off the memory for months. So is the legendarily divine taste.
              </p>
              <a href="#" className="card-hlink">Order for Delivery</a>
            </div>
          </div>
          <div className="card">
            <img src="card3.png" className="card-img-top" alt="French toast" />
            <div className="card-body">
              <div className="card-heading">
                <p className="card-title">French toast</p>
                <p className="card-price">$ 2.99</p>
              </div>
              <p className="card-disc">
                Unlike its more restrained Sunday brunch counterpart, Hong Kong-style French toast is like a deep-fried hug. Two pieces of toast are slathered with peanut butter or kaya jam, soaked in egg batter, fried in butter and served with still more butter and lots of syrup. A Hong Kong best food.
              </p>
              <a href="#" className="card-hlink">Order for Delivery</a>
            </div>
          </div>
        </div>
      </div >
      <div className="section-testimonials">
        <p className="heading">What others say about us?</p>
        <div className="cards">
          <div className="card">
            <p className="rating">★★★★★</p>
            <div className="card-body">
              <div className="card-heading">
                <p className="person-img">
                  <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="person1" />
                </p>
                <p className="person-name">Marry Celery</p>
              </div>
              <p className="card-disc">
                I would like to express my gratitude for the exemplary customer service I received with my order of Little lemon res.
              </p>
            </div>
          </div>
          <div className="card">
            <p className="rating">★★★★★</p>
            <div className="card-body">
              <div className="card-heading">
                <p className="person-img">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="person1" />
                </p>
                <p className="person-name">Mia Penecila</p>
              </div>
              <p className="card-disc">
                I just received my order and I am very happy with it! I had a special request, and my order arrived exactly as promised.
              </p>
            </div>
          </div>
          <div className="card">
            <p className="rating">★★★★★</p>
            <div className="card-body">
              <div className="card-heading">
                <p className="person-img">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="person1" />
                </p>
                <p className="person-name">Smith Corey</p>
              </div>
              <p className="card-disc">
                I am beyond thrilled with my custom Dunkin Donuts coffee spill. It's none short of perfect. Thank you for your attention to details.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="section-about">
        <div className="fb-text">
          <div className="heading">
            <p className="title">Little Lemon Restaurant</p>
            <p className="sub-title">Los Angeles</p>
          </div>
          <div>
            <p className="about-disc">
              Welcome to Little Lemon, a unique and vibrant restaurant located in the heart of Los Angeles. We are committed to providing our customers with an unforgettable experience from the moment they walk in the door.
              <br /><br />
              At Little Lemon, we offer a variety of delicious dishes that are sure to please anyone’s palate. Our menu features classic American cuisine as well as some modern twists on traditional recipes. We specialize in sandwiches, burgers, salads, and seafood dishes, plus we have a fantastic selection of sides, desserts, and drinks to choose from.
              <br /><br />
              Our passion for cooking and our commitment to excellence is evident in everything we do. Our recipes are made with the freshest ingredients, and our attentive staff provides excellent service. We strive to make sure each one of our customers is completely satisfied with their meal.
              <br /><br />
              We look forward to serving you at Little Lemon. Come join us for a delicious meal in a warm and inviting atmosphere.
            </p>
          </div>
        </div>
        <div className="fb-img">
          <img src="about.png" alt="image" />
        </div>
      </div>
    </main >
  );
}

export default Main;