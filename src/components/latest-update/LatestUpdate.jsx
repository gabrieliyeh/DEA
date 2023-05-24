import { toast } from "react-toastify";
import "./latest-update.css";
import { useState } from "react";

const LatestUpdate = () => {
  const [email, setEmail] = useState('');
  const handleSubscription =(e)=> {
    e.preventDefault()
    setTimeout(()=> {
      toast.success('Subscription successful')
      setEmail('')
    }, 1000)

  }

  return (
    <section className="section latest-update">
      <div className="section-center">
      <h2 >Get the latest update</h2>
      <p>Make sure you sign up to get the latest updates 
        <br />
        about our solution.</p>
        <form onSubmit={handleSubscription}>
          <div className="form-control">
            <div className="input-wrapper">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="enter your email"
              required
              onChange={(e)=> setEmail(e.target.value) }
            />
            <button type="submit" className="btn">
            {" "}
            SUBSCRIBE
          </button>
          </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LatestUpdate;
