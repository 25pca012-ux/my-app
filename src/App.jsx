import { useMemo, useState } from 'react';
import Flower from './components/Flower.jsx';
import Bouquet from './components/Bouquet.jsx';
import { bouquets, filters, occasions, reviews, rupee } from './data.js';

export default function App() {
  const [filter, setFilter] = useState('All');
  const [cart, setCart] = useState({});
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState('');
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const shown = useMemo(() => bouquets.filter((b) => filter === 'All' || b.type === filter), [filter]);
  const lines = bouquets.filter((b) => cart[b.id]).map((b) => ({ ...b, qty: cart[b.id] }));
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const total = lines.reduce((n, l) => n + l.qty * l.price, 0);

  const flash = (msg) => {
    setNote(msg);
    setTimeout(() => setNote(''), 2200);
  };
  const add = (b) => {
    setCart((c) => ({ ...c, [b.id]: (c[b.id] || 0) + 1 }));
    flash(b.name + ' added to your basket');
  };
  const change = (id, d) =>
    setCart((c) => {
      const q = (c[id] || 0) + d;
      const next = { ...c };
      if (q <= 0) delete next[id];
      else next[id] = q;
      return next;
    });
  const order = () => {
    setCart({});
    setOpen(false);
    flash('Order placed. We will deliver your flowers today.');
  };
  const join = (e) => {
    e.preventDefault();
    if (email.includes('@')) setJoined(true);
  };

  return (
    <>
      <header className="nav">
        <a className="brand" href="#home">
          <Flower size={34} petals={5} outer="#f7a8c4" inner="#e8588a" />
          <span>Bloom &amp; Petal</span>
        </a>
        <nav aria-label="Main">
          <a href="#shop">Shop</a>
          <a href="#occasions">Occasions</a>
          <a href="#about">Why us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="basket" onClick={() => setOpen(true)} aria-label={'Open basket, ' + count + ' items'}>
          Basket <span className="badge">{count}</span>
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <h1>Flowers cut this morning, at your door by evening.</h1>
            <p>
              Hand-tied bouquets from our Tamil Nadu flower farms. Order before 2 pm and we deliver the same day across
              Tiruchengode, Salem and Erode.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#shop">Shop bouquets</a>
              <a className="btn ghost" href="#occasions">Find a gift by occasion</a>
            </div>
            <ul className="facts">
              <li><b>2 pm</b> same-day cut-off</li>
              <li><b>7 days</b> freshness promise</li>
              <li><b>4.9</b> from 2,300 reviews</li>
            </ul>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="blob" />
            <Flower className="f f1" size={230} petals={10} outer="#fbd0df" inner="#ee7ea6" round />
            <Flower className="f f2" size={170} petals={9} outer="#e0586f" inner="#9d1236" round />
            <Flower className="f f3" size={150} petals={14} outer="#ffd23f" inner="#f2a900" center="#6b3f1d" dots="#2d1b0e" />
            <Flower className="f f4" size={110} petals={7} outer="#cdb4f0" inner="#8a5fd0" />
            <Flower className="f f5" size={90} petals={14} outer="#ffffff" inner="#e9eef2" />
          </div>
        </section>

        <section className="section" id="shop">
          <div className="head">
            <h2>Bouquets we are sending out today</h2>
            <div className="chips" role="group" aria-label="Filter bouquets">
              {filters.map((f) => (
                <button key={f} className={'chip' + (f === filter ? ' on' : '')} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
          </div>
          <div className="grid">
            {shown.map((b) => (
              <article className="card" key={b.id}>
                <div className="pic"><Bouquet look={b.look} /></div>
                <h3>{b.name}</h3>
                <p className="muted">{b.note}</p>
                <div className="foot">
                  <b className="price">{rupee(b.price)}</b>
                  <button className="btn small" onClick={() => add(b)}>
                    {cart[b.id] ? 'Add another (' + cart[b.id] + ')' : 'Add to basket'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section tint" id="occasions">
          <h2>Flowers for every occasion</h2>
          <div className="occ">
            {occasions.map((o) => (
              <a className="occ-card" href="#shop" key={o.name}>
                <Flower size={64} {...o.look} />
                <h3>{o.name}</h3>
                <p>{o.text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <h2>Why people order from us</h2>
          <div className="why">
            <div>
              <h3>Grown, not stocked</h3>
              <p>Our flowers come from partner farms in Hosur and Ooty. They reach you within 24 hours of cutting.</p>
            </div>
            <div>
              <h3>Wrapped by hand</h3>
              <p>Every bouquet is tied and wrapped by one florist who checks each stem before it leaves the shop.</p>
            </div>
            <div>
              <h3>Fresh for a week or we replace it</h3>
              <p>If your flowers wilt within 7 days, message us a photo and we send a new bouquet at no cost.</p>
            </div>
          </div>
        </section>

        <section className="section tint" id="reviews">
          <h2>What our customers say</h2>
          <div className="reviews">
            {reviews.map((r) => (
              <figure key={r.name}>
                <blockquote>{r.text}</blockquote>
                <figcaption><b>{r.name}</b>, {r.city}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section join" id="contact">
          <Flower className="join-flower" size={140} petals={10} outer="#fbd0df" inner="#ee7ea6" round />
          <div>
            <h2>Get 10% off your first bouquet</h2>
            <p>Join our list for seasonal arrivals and festival offers. We send one email a week at most.</p>
            {joined ? (
              <p className="thanks" role="status">Thank you. Your 10% code is BLOOM10.</p>
            ) : (
              <form onSubmit={join}>
                <label className="sr" htmlFor="mail">Email address</label>
                <input id="mail" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="btn primary" type="submit">Send my code</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <b>Bloom &amp; Petal</b>
          <p>12 Garden Road, Tiruchengode, Tamil Nadu 637211</p>
        </div>
        <div>
          <p>Open daily, 8 am to 8 pm</p>
          <p>+91 98765 43210 &nbsp;|&nbsp; hello@bloomandpetal.in</p>
        </div>
        <p className="copy">Built with React and deployed with GitHub Actions.</p>
      </footer>

      {open && <div className="scrim" onClick={() => setOpen(false)} />}
      <aside className={'drawer' + (open ? ' open' : '')} aria-hidden={!open}>
        <div className="drawer-head">
          <h2>Your basket</h2>
          <button className="x" onClick={() => setOpen(false)} aria-label="Close basket">Close</button>
        </div>
        {lines.length === 0 ? (
          <p className="empty">Your basket is empty. Pick a bouquet from the shop to start.</p>
        ) : (
          <>
            <ul className="lines">
              {lines.map((l) => (
                <li key={l.id}>
                  <div className="mini"><Bouquet look={l.look} /></div>
                  <div className="info">
                    <b>{l.name}</b>
                    <span>{rupee(l.price)}</span>
                    <div className="qty">
                      <button onClick={() => change(l.id, -1)} aria-label={'Remove one ' + l.name}>-</button>
                      <span>{l.qty}</span>
                      <button onClick={() => change(l.id, 1)} aria-label={'Add one ' + l.name}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="sum"><span>Total</span><b>{rupee(total)}</b></div>
            <button className="btn primary wide" onClick={order}>Place order</button>
          </>
        )}
      </aside>

      {note && <div className="toast" role="status">{note}</div>}
    </>
  );
}
