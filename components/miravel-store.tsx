"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const products = [
  { id: 1, name: "Orbit shell jacket", price: 64, type: "Jackets", image: "/images/miravel-campaign.png", position: "18% center", color: "Bubblegum" },
  { id: 2, name: "Frame tank dress", price: 48, type: "Dresses", image: "/images/miravel-editorial.png", position: "center 28%", color: "Clean white" },
  { id: 3, name: "Nova wide-leg jean", price: 58, type: "Denim", image: "/images/miravel-campaign.png", position: "53% center", color: "Electric wash" },
  { id: 4, name: "Afterglow mesh top", price: 42, type: "Tops", image: "/images/miravel-campaign.png", position: "86% center", color: "Midnight" },
  { id: 5, name: "Halo shoulder bag", price: 45, type: "Accessories", image: "/images/miravel-bag.png", position: "center", color: "Hot pink" },
  { id: 6, name: "Axis mini dress", price: 55, type: "Dresses", image: "/images/miravel-editorial.png", position: "center 56%", color: "Optic white" },
];

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 100 100" fill="none">
      <path d="M50 2C50 34 34 50 2 50C34 50 50 66 50 98C50 66 66 50 98 50C66 50 50 34 50 2Z" />
      <path d="M78 8C78 18.7 72.7 24 62 24C72.7 24 78 29.3 78 40C78 29.3 83.3 24 94 24C83.3 24 78 18.7 78 8Z" />
    </svg>
  );
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-label="Miravel M monogram" viewBox="0 0 220 150" fill="none">
      <path d="M14 124 61 22c7-15 24-15 29 1l17 50 31-50c9-15 30-11 32 6l10 97h-39l-2-54-31 49c-7 11-23 9-27-3L66 74l-19 50H14Z" fill="currentColor" />
      <path d="M28 110C69 80 115 50 204 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MenuPanel() {
  return (
    <SheetContent side="top" className="menu-panel" showCloseButton={false}>
      <SheetTitle className="sr-only">Shop Miravel</SheetTitle>
      <SheetDescription className="sr-only">Browse all clothing, accessories, new arrivals and editorial collections.</SheetDescription>
      <SheetClose className="mega-close" aria-label="Close menu"><X /></SheetClose>
      <div className="menu-grid desktop-menu-view">
        <div className="menu-links">
          <div className="menu-column">
            <h3>Shop all</h3>
            <SheetClose asChild><a href="#new">New arrivals</a></SheetClose>
            <SheetClose asChild><a href="#shop">Clothing</a></SheetClose>
            <SheetClose asChild><a href="#spotlight">Accessories</a></SheetClose>
            <SheetClose asChild><a href="#editorial">The edit</a></SheetClose>
            <SheetClose asChild><a href="#shop">Sale</a></SheetClose>
          </div>
          <div className="menu-column">
            <h3>New in</h3>
            <SheetClose asChild><a href="#new">This week</a></SheetClose>
            <SheetClose asChild><a href="#shop">Most wanted</a></SheetClose>
            <SheetClose asChild><a href="#shop">Fresh color</a></SheetClose>
            <SheetClose asChild><a href="#spotlight">New accessories</a></SheetClose>
            <SheetClose asChild><a href="#shop">Back in stock</a></SheetClose>
          </div>
        </div>
        <div className="menu-mark" aria-hidden="true">
          <img src="/images/miravel-pink-monogram.png" alt="" />
          <span>Miravel / Drop 01</span>
        </div>
        <div className="menu-campaign">
          <img src="/images/miravel-hero-model.png" alt="Model wearing a pink Miravel jacket and translucent glasses" />
          <div><span>NEW FORM / SS26</span><strong>SHOP THE DROP</strong></div>
        </div>
      </div>
      <div className="mobile-menu-view">
        <img className="mobile-menu-backdrop" src="/images/miravel-hero-model.png" alt="" aria-hidden="true" />
        <div className="mobile-menu-veil" aria-hidden="true" />
        <div className="mobile-menu-content">
          <div className="mobile-menu-topline">
            <img className="mobile-menu-logo" src="/images/miravel-glass-logo.png" alt="Miravel" />
            <span>01 / SS26</span>
          </div>
          <p className="mobile-menu-title" aria-hidden="true">NAVI<br />MOBILE<br />MENU</p>
          <nav className="mobile-menu-categories" aria-label="Mobile categories">
            <p>Categories</p>
            <SheetClose asChild><a href="#new">New in</a></SheetClose>
            <SheetClose asChild><a href="#shop">Clothing</a></SheetClose>
            <SheetClose asChild><a href="#spotlight">Accessories</a></SheetClose>
            <SheetClose asChild><a href="#editorial">The edit</a></SheetClose>
            <SheetClose asChild><a href="#shop">Sale</a></SheetClose>
          </nav>
          <div className="mobile-menu-recommendations">
            <p>Recommendations</p>
            <div>
              <SheetClose asChild><a href="#new">Trending now</a></SheetClose>
              <SheetClose asChild><a href="#shop">Under $50</a></SheetClose>
              <SheetClose asChild><a href="#new">New drop</a></SheetClose>
              <SheetClose asChild><a href="#shop">Most wanted</a></SheetClose>
              <SheetClose asChild><a href="#spotlight">Accessories</a></SheetClose>
            </div>
          </div>
        </div>
      </div>
    </SheetContent>
  );
}

function SearchModal() {
  return (
    <DialogContent className="search-modal">
      <DialogTitle>Find your new favorite</DialogTitle>
      <DialogDescription>Search clothing, accessories and the latest drop.</DialogDescription>
      <label className="search-field">
        <Search />
        <input autoFocus placeholder="Search Miravel" aria-label="Search Miravel" />
        <span>ENTER</span>
      </label>
      <div className="search-suggestions">
        <p className="mini-label">Popular now</p>
        <a href="#shop">Pink layers <ArrowRight /></a>
        <a href="#shop">Wide-leg denim <ArrowRight /></a>
        <a href="#shop">Shoulder bags <ArrowRight /></a>
      </div>
    </DialogContent>
  );
}

function CartPanel({ count, setCount }: { count: number; setCount: (count: number) => void }) {
  return (
    <SheetContent className="cart-panel">
      <SheetHeader className="cart-header">
        <SheetTitle>Your bag <span>({count})</span></SheetTitle>
        <SheetDescription>Pieces saved for your next perspective.</SheetDescription>
      </SheetHeader>
      {count === 0 ? (
        <div className="empty-cart"><ShoppingBag /><h3>Your bag is empty</h3><p>The new drop is ready when you are.</p><SheetClose asChild><a href="#shop" className="solid-button">Shop new in</a></SheetClose></div>
      ) : (
        <>
          <div className="cart-item">
            <img src="/images/miravel-bag.png" alt="Halo pink shoulder bag" />
            <div><p className="mini-label">Accessories / New</p><h3>Halo shoulder bag</h3><p>$45.00</p><div className="quantity"><button onClick={() => setCount(Math.max(0, count - 1))} aria-label="Remove one"><Minus /></button><span>{count}</span><button onClick={() => setCount(count + 1)} aria-label="Add one"><Plus /></button></div></div>
          </div>
          <div className="cart-summary"><div><span>Subtotal</span><strong>${(45 * count).toFixed(2)}</strong></div><p>Shipping calculated at checkout.</p><button className="solid-button">Checkout <ArrowRight /></button></div>
        </>
      )}
    </SheetContent>
  );
}

export function MiravelStore() {
  const [cartCount, setCartCount] = useState(0);
  const [filter, setFilter] = useState("All");
  const [added, setAdded] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHeaderScrolled(window.scrollY > 80);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const addBag = () => {
    setCartCount((value) => value + 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  const visibleProducts = filter === "All" ? products : products.filter((product) => product.type === filter);

  return (
    <main>
      <div className="announcement"><span>NEW SEASON / SS26</span><span className="announcement-center">COMPLIMENTARY SHIPPING OVER $80</span><span>CAIRO / 28°</span></div>
      <header className={`site-header${headerScrolled ? " is-scrolled" : ""}`}>
        <nav aria-label="Primary navigation" className="desktop-nav">
          <a href="#new">New in</a>
          <button onClick={() => setMenuOpen(true)}>Shop</button>
          <a href="#editorial">Editorial</a>
        </nav>
        <button className="mobile-icon" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu strokeWidth={1.5} /></button>
        <a className="wordmark" href="#top" aria-label="Miravel home">
          <img src="/images/miravel-glass-logo.png" alt="Miravel M" />
        </a>
        <div className="header-actions">
          <button aria-label="Search" onClick={() => setSearchOpen(true)}><Search strokeWidth={1.45} /></button>
          <button aria-label={`Shopping bag with ${cartCount} items`} className="bag-button" onClick={() => setCartOpen(true)}><ShoppingBag strokeWidth={1.45} /><span>{cartCount}</span></button>
        </div>
      </header>
      <div className="header-spacer" aria-hidden="true" />
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}><MenuPanel /></Sheet>
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}><SearchModal /></Dialog>
      <Sheet open={cartOpen} onOpenChange={setCartOpen}><CartPanel count={cartCount} setCount={setCartCount} /></Sheet>

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <p className="hero-edition">CAMPAIGN</p><p className="hero-season"><span>815G</span><span>880</span><br />LABE</p>
        <div className="hero-brand" aria-hidden="true">MIRAVEL</div>
        <img className="hero-model" src="/images/miravel-hero-model.png" alt="Model wearing a pink Miravel high-neck jacket and translucent glasses" />
        <Spark className="hero-spark" />
        <div className="hero-copy"><h1 id="hero-heading">New<br />form</h1><a className="text-link" href="#shop">Explore collection <span>→</span></a></div>
        <p className="hero-caption">MIRAVEL<br />FORM 01</p>
      </section>

      <div className="ticker" aria-label="Miravel brand values"><div><span>NEW PERSPECTIVE</span><i>✦</i><span>SAME ENERGY</span><i>✦</i><span>NEW PERSPECTIVE</span><i>✦</i><span>SAME ENERGY</span><i>✦</i></div></div>

      <section className="collection" id="shop">
        <div className="section-heading"><div><p className="mini-label">01 / THE LATEST DROP</p><h2>Shop the<br /><em>new energy.</em></h2></div><p>Everyday pieces with an after-dark point of view. Designed to mix, repeat and make your own.</p></div>
        <div className="collection-tools">
          <div className="filter-pills" role="group" aria-label="Filter products">
            {['All', 'Dresses', 'Tops', 'Denim', 'Jackets', 'Accessories'].map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <Sheet><SheetTrigger asChild><button className="filter-button"><SlidersHorizontal /> Filter</button></SheetTrigger><SheetContent side="bottom" className="filter-sheet"><SheetHeader><SheetTitle>Filter the drop</SheetTitle><SheetDescription>Choose what fits your perspective.</SheetDescription></SheetHeader><div className="filter-sheet-grid"><div><p className="mini-label">Color</p><div className="large-swatches"><button aria-label="Bubblegum pink" /><button aria-label="Hot pink" /><button aria-label="Electric blue" /><button aria-label="Black" /><button aria-label="White" /></div></div><div><p className="mini-label">Size</p><div className="size-list"><button>XS</button><button>S</button><button>M</button><button>L</button><button>XL</button></div></div></div><SheetClose asChild><button className="solid-button filter-apply">Show {visibleProducts.length} pieces</button></SheetClose></SheetContent></Sheet>
        </div>
        <div className="product-grid" id="new">
          {visibleProducts.map((product, index) => (
            <article className="product-card" key={product.id}>
              <a className="product-image" href={product.id === 5 ? '#spotlight' : '#shop'}>
                {index < 2 && <span className="product-badge">{index === 0 ? 'New' : 'Bestseller'}</span>}
                <img src={product.image} alt={product.name} style={{ objectPosition: product.position }} />
                <span className="quick-add" onClick={(event) => { event.preventDefault(); addBag(); }}>Quick add <Plus /></span>
              </a>
              <div className="product-meta"><div><h3>{product.name}</h3><p>{product.color}</p></div><strong>${product.price}.00</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial" id="editorial">
        <div className="editorial-main"><img src="/images/miravel-campaign.png" alt="Miravel Future Forward campaign" /><div className="editorial-copy"><p className="mini-label">02 / MIRAVEL EDITORIAL</p><h2>Future<br />forward</h2><p>Soft color. Sharp proportions. A wardrobe built for every version of you.</p><a className="text-link" href="#shop">View the story <span>↗</span></a></div></div>
        <div className="editorial-detail"><div className="crop-grid"><img src="/images/miravel-editorial.png" alt="Miravel white dress editorial portrait" /><img src="/images/miravel-editorial.png" alt="Detail of Miravel editorial makeup and styling" /></div><div><Spark /><p className="mini-label">LOOK 04 / OPTIC WHITE</p><h3>Clean lines.<br /><em>Maximum impact.</em></h3></div></div>
      </section>

      <section className="spotlight" id="spotlight">
        <div className="spotlight-gallery"><div className="thumbs"><button className="active"><img src="/images/miravel-bag.png" alt="" /></button><button><img src="/images/miravel-campaign.png" alt="" /></button><button><img src="/images/miravel-editorial.png" alt="" /></button></div><div className="spotlight-image"><span className="image-count">01 / 03</span><button className="gallery-arrow left" aria-label="Previous image"><ChevronLeft /></button><img src="/images/miravel-bag.png" alt="Halo translucent pink shoulder bag" /><button className="gallery-arrow right" aria-label="Next image"><ChevronRight /></button></div></div>
        <div className="spotlight-info"><p className="mini-label">ACCESSORIES / NEW</p><h2>Halo<br />shoulder bag</h2><div className="price-row"><strong>$45.00</strong><span>or 4 payments of $11.25</span></div><p className="product-description">The compact icon of Drop 01. A translucent pink finish, silver hardware and electric-blue edge detail bring future energy to every look.</p><div className="color-choice"><span>Color: <strong>Hot pink</strong></span><div className="large-swatches"><button className="selected" aria-label="Hot pink selected"><Check /></button><button aria-label="Bubblegum pink" /><button aria-label="Silver" /></div></div><button className="solid-button add-button" onClick={addBag}>{added ? <><Check /> Added to bag</> : <>Add to bag <ArrowRight /></>}</button><Accordion type="single" collapsible className="product-accordion"><AccordionItem value="details"><AccordionTrigger>Product details</AccordionTrigger><AccordionContent>Soft transparent TPU with a nylon lining, polished hardware and an adjustable shoulder strap. 24 × 14 × 7 cm.</AccordionContent></AccordionItem><AccordionItem value="delivery"><AccordionTrigger>Delivery & returns</AccordionTrigger><AccordionContent>Complimentary shipping over $80. Returns accepted within 21 days in original condition.</AccordionContent></AccordionItem><AccordionItem value="care"><AccordionTrigger>Care guide</AccordionTrigger><AccordionContent>Wipe clean with a soft damp cloth. Keep away from prolonged heat and direct sunlight.</AccordionContent></AccordionItem></Accordion></div>
      </section>

      <section className="brand-code">
        <div className="brand-title"><p className="mini-label">03 / THE MIRAVEL CODE</p><h2>Fluid form.<br /><em>Electric spirit.</em></h2></div>
        <div className="monogram-card"><span>FLAT / ELECTRIC</span><Monogram /><small>THE MIRAVEL M</small></div>
        <div className="glass-card"><span>TRANSLUCENT / CAMPAIGN</span><div className="glass-orbit"><Monogram /></div><small>FUTURE-FORWARD</small></div>
        <div className="palette-card"><p className="mini-label">Signature colors</p><div><span style={{ background: '#3267FF' }}><b>Electric blue</b><small>#3267FF</small></span><span style={{ background: '#FF9FCC' }}><b>Bubblegum</b><small>#FF9FCC</small></span><span style={{ background: '#FF4F9D' }}><b>Hot pink</b><small>#FF4F9D</small></span><span style={{ background: '#FFFFFF' }}><b>Clean white</b><small>#FFFFFF</small></span></div></div>
      </section>

      <footer className="footer"><div className="footer-top"><div><p className="mini-label">Stay in the loop</p><h2>First looks,<br />fresh energy.</h2></div><form onSubmit={(event) => event.preventDefault()}><label><span className="sr-only">Email address</span><input type="email" placeholder="Email address" required /><button aria-label="Subscribe"><ArrowRight /></button></label><p>By subscribing, you agree to receive Miravel updates.</p></form></div><div className="footer-links"><div><a href="#shop">Shop</a><a href="#new">New in</a><a href="#editorial">Editorial</a></div><div><a href="#top">Instagram</a><a href="#top">TikTok</a><a href="#top">Pinterest</a></div><div><a href="#top">Shipping</a><a href="#top">Returns</a><a href="#top">Contact</a></div></div><div className="footer-wordmark">MIRAVEL</div><div className="footer-legal"><span>© 2026 MIRAVEL</span><span>NEW PERSPECTIVE / SAME ENERGY</span><span>PRIVACY / TERMS</span></div></footer>
      {added && <div className="added-toast" role="status"><Check /> Halo bag added</div>}
    </main>
  );
}
