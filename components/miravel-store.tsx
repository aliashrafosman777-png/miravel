"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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
  X,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
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
  { id: 1, name: "Orbit shell jacket", price: 64, type: "Jackets", color: "Bubblegum", images: [
    { src: "/images/products/orbit-jacket-01.jpg", position: "center" }, { src: "/images/products/orbit-jacket-02.jpg", position: "center" },
    { src: "/images/products/orbit-jacket-03.jpg", position: "center" }, { src: "/images/products/orbit-jacket-04.jpg", position: "center" },
  ] },
  { id: 2, name: "Azure halter top", price: 42, type: "Tops", color: "Electric blue", images: [
    { src: "/images/products/azure-top-01.jpg", position: "center" }, { src: "/images/products/azure-top-02.jpg", position: "center" },
    { src: "/images/products/azure-top-03.jpg", position: "center" }, { src: "/images/products/azure-top-04.jpg", position: "center" },
    { src: "/images/products/azure-top-05.jpg", position: "center" },
  ] },
  { id: 3, name: "Nova wide-leg jean", price: 58, type: "Denim", color: "Electric wash", images: [
    { src: "/images/products/nova-jeans-01.jpg", position: "center" }, { src: "/images/products/nova-jeans-02.jpg", position: "center" },
    { src: "/images/products/nova-jeans-03.jpg", position: "center" }, { src: "/images/products/nova-jeans-04.jpg", position: "center" },
  ] },
  { id: 4, name: "Axis denim mini skirt", price: 52, type: "Skirts", color: "Light wash", images: [
    { src: "/images/products/axis-skirt-01.jpg", position: "center" }, { src: "/images/products/axis-skirt-02.jpg", position: "center" },
    { src: "/images/products/axis-skirt-03.jpg", position: "center" }, { src: "/images/products/axis-skirt-04.jpg", position: "center" },
  ] },
  { id: 5, name: "Halo shoulder bag", price: 45, type: "Accessories", color: "Hot pink", images: [
    { src: "/images/products/halo-bag-01.jpg", position: "center", contain: true }, { src: "/images/products/halo-bag-02.jpg", position: "center", contain: true },
    { src: "/images/products/halo-bag-03.jpg", position: "center", contain: true },
  ] },
  { id: 6, name: "Future runner sneaker", price: 68, type: "Shoes", color: "Silver blue", images: [
    { src: "/images/products/future-sneaker-01.jpg", position: "center", contain: true }, { src: "/images/products/future-sneaker-02.jpg", position: "center", contain: true },
    { src: "/images/products/future-sneaker-03.jpg", position: "center", contain: true },
  ] },
];

const haloImages = products.find((product) => product.id === 5)!.images;

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 100 100" fill="none">
      <path d="M50 2C50 34 34 50 2 50C34 50 50 66 50 98C50 66 66 50 98 50C66 50 50 34 50 2Z" />
      <path d="M78 8C78 18.7 72.7 24 62 24C72.7 24 78 29.3 78 40C78 29.3 83.3 24 94 24C83.3 24 78 18.7 78 8Z" />
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
  const [added, setAdded] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [productGalleryIndexes, setProductGalleryIndexes] = useState<Record<number, number>>({});
  const [spotlightImageIndex, setSpotlightImageIndex] = useState(0);
  const [railProgress, setRailProgress] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const updateProgress = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    if (maxScroll <= 0) { setRailProgress(0); return; }
    setRailProgress(rail.scrollLeft / maxScroll);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    rail.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => rail.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  // Mouse wheel horizontal scrolling
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const maxScroll = rail.scrollWidth - rail.clientWidth;
        if (maxScroll <= 0) return;
        // Only prevent default if we can still scroll in that direction
        if ((e.deltaY > 0 && rail.scrollLeft < maxScroll) || (e.deltaY < 0 && rail.scrollLeft > 0)) {
          e.preventDefault();
          rail.scrollLeft += e.deltaY;
        }
      }
    };
    rail.addEventListener("wheel", onWheel, { passive: false });
    return () => rail.removeEventListener("wheel", onWheel);
  }, []);

  // Drag to scroll
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const rail = railRef.current;
    if (!rail) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, scrollLeft: rail.scrollLeft };
    rail.setPointerCapture(e.pointerId);
    rail.style.cursor = "grabbing";
    rail.style.scrollSnapType = "none";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !railRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    railRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !railRef.current) return;
    isDragging.current = false;
    railRef.current.releasePointerCapture(e.pointerId);
    railRef.current.style.cursor = "";
    railRef.current.style.scrollSnapType = "";
  }, []);

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

  const changeProductImage = (productId: number, imageCount: number, direction: number) => {
    setProductGalleryIndexes((current) => ({
      ...current,
      [productId]: ((current[productId] ?? 0) + direction + imageCount) % imageCount,
    }));
  };

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
        <img className="hero-model" src="/images/miravel-hero-model-wide.png" alt="Model wearing a pink Miravel high-neck jacket and translucent glasses" />
        <Spark className="hero-spark" />
        <div className="hero-copy"><h1 id="hero-heading">New<br />form</h1><a className="text-link" href="#shop">Explore collection <span>→</span></a></div>
        <p className="hero-caption">MIRAVEL<br />FORM 01</p>
      </section>

      <section className="collection" id="shop">
        <div className="most-wanted">
          <h2>Most wanted</h2>
          <div
            className="product-rail"
            id="new"
            ref={railRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
          {products.map((product, index) => {
            const imageIndex = productGalleryIndexes[product.id] ?? 0;
            const image = product.images[imageIndex];
            return (
              <article className="wanted-card" key={product.id}>
                <div className="wanted-image">
                  <img draggable={false} className={image.contain ? 'contain' : ''} src={image.src} alt={`${product.name}, view ${imageIndex + 1} of ${product.images.length}`} style={{ objectPosition: image.position }} />
                  <span className="wanted-gallery-count">{imageIndex + 1} / {product.images.length}</span>
                  <div className="wanted-gallery-controls">
                    <button type="button" aria-label={`Previous image of ${product.name}`} onPointerDown={(event) => event.stopPropagation()} onClick={() => changeProductImage(product.id, product.images.length, -1)}><ChevronLeft /></button>
                    <button type="button" aria-label={`Next image of ${product.name}`} onPointerDown={(event) => event.stopPropagation()} onClick={() => changeProductImage(product.id, product.images.length, 1)}><ChevronRight /></button>
                  </div>
                </div>
                <a className="wanted-meta" href={product.id === 5 ? '#spotlight' : '#shop'} draggable={false}><small>{String(index + 1).padStart(2, '0')}</small><strong>{product.name}</strong><span>${product.price}.00</span></a>
              </article>
            );
          })}
          </div>
          <div className="rail-progress" aria-hidden="true"><span style={{ width: `${Math.max(12.5, (1 / products.length) * 100)}%`, transform: `translateX(${railProgress * ((products.length / 1) - 1) * 100}%)` }} /></div>
        </div>
      </section>

      <section className="category-showcase" id="categories" aria-labelledby="category-heading">
        <div className="category-bar"><h2 id="category-heading">Shop by category</h2><span>Mobile</span></div>
        <div className="category-grid">
          <a className="category-card" href="#shop"><img src="/images/products/orbit-jacket-02.jpg" alt="Woman wearing a pink Miravel jacket" /><h3>Women</h3><p>Technical captions<br />on-hover effect</p></a>
          <a className="category-card" href="#new"><img src="/images/products/azure-top-02.jpg" alt="Woman wearing a blue Miravel top" /><h3>New in</h3><p>Technical captions<br />on-hover effect</p></a>
          <a className="category-card" href="#spotlight"><img src="/images/products/halo-bag-01.jpg" alt="Pink Miravel shoulder bag" /><h3>Accessories</h3><p>Technical captions<br />on-hover effect</p></a>
          <a className="category-card" href="#shop"><img src="/images/products/nova-jeans-04.jpg" alt="Woman wearing Miravel wide-leg jeans" /><h3>Essentials</h3><p>Technical captions<br />on-hover effect</p></a>
        </div>
      </section>

      <section className="spotlight" id="spotlight">
        <div className="spotlight-gallery"><div className="thumbs">{haloImages.map((image, index) => <button key={image.src} className={spotlightImageIndex === index ? 'active' : ''} onClick={() => setSpotlightImageIndex(index)} aria-label={`Show bag image ${index + 1}`}><img src={image.src} alt="" /></button>)}</div><div className="spotlight-image"><span className="image-count">{String(spotlightImageIndex + 1).padStart(2, '0')} / {String(haloImages.length).padStart(2, '0')}</span><button className="gallery-arrow left" aria-label="Previous image" onClick={() => setSpotlightImageIndex((current) => (current - 1 + haloImages.length) % haloImages.length)}><ChevronLeft /></button><img src={haloImages[spotlightImageIndex].src} alt={`Halo translucent pink shoulder bag, view ${spotlightImageIndex + 1}`} /><button className="gallery-arrow right" aria-label="Next image" onClick={() => setSpotlightImageIndex((current) => (current + 1) % haloImages.length)}><ChevronRight /></button></div></div>
        <div className="spotlight-info"><p className="mini-label">ACCESSORIES / NEW</p><h2>Halo<br />shoulder bag</h2><div className="price-row"><strong>$45.00</strong><span>or 4 payments of $11.25</span></div><p className="product-description">The compact icon of Drop 01. A translucent pink finish, silver hardware and electric-blue edge detail bring future energy to every look.</p><div className="color-choice"><span>Color: <strong>Hot pink</strong></span><div className="large-swatches"><button className="selected" aria-label="Hot pink selected"><Check /></button><button aria-label="Bubblegum pink" /><button aria-label="Silver" /></div></div><button className="solid-button add-button" onClick={addBag}>{added ? <><Check /> Added to bag</> : <>Add to bag <ArrowRight /></>}</button><Accordion type="single" collapsible className="product-accordion"><AccordionItem value="details"><AccordionTrigger>Product details</AccordionTrigger><AccordionContent>Soft transparent TPU with a nylon lining, polished hardware and an adjustable shoulder strap. 24 × 14 × 7 cm.</AccordionContent></AccordionItem><AccordionItem value="delivery"><AccordionTrigger>Delivery & returns</AccordionTrigger><AccordionContent>Complimentary shipping over $80. Returns accepted within 21 days in original condition.</AccordionContent></AccordionItem><AccordionItem value="care"><AccordionTrigger>Care guide</AccordionTrigger><AccordionContent>Wipe clean with a soft damp cloth. Keep away from prolonged heat and direct sunlight.</AccordionContent></AccordionItem></Accordion></div>
      </section>

      <section className="community" id="editorial" aria-label="Miravel social and newsletter">
        <div className="instagram-panel">
          <div className="instagram-heading"><div><p>Instagram</p><h2>@Miravel</h2></div><a href="#top">Follow CTA</a></div>
          <div className="social-grid">
            <a href="#top"><img src="/images/miravel-campaign.png" alt="Miravel editorial look" style={{ objectPosition: '88% center' }} /></a>
            <a href="#top"><img src="/images/miravel-hero-model.png" alt="Pink Miravel jacket look" style={{ objectPosition: 'center 28%' }} /></a>
            <a href="#top"><img src="/images/miravel-campaign.png" alt="Miravel campaign group" style={{ objectPosition: '55% center' }} /></a>
            <a href="#top"><img src="/images/miravel-campaign.png" alt="Miravel midnight look" style={{ objectPosition: '94% center' }} /></a>
            <a href="#top"><img src="/images/miravel-editorial.png" alt="Miravel clean white look" style={{ objectPosition: 'center 35%' }} /></a>
            <a href="#top"><img src="/images/miravel-hero-model.png" alt="Miravel bubblegum look" style={{ objectPosition: 'center 44%' }} /></a>
          </div>
        </div>
        <div className="newsletter-panel">
          <span className="newsletter-orbit orbit-top" aria-hidden="true" />
          <span className="newsletter-orbit orbit-bottom" aria-hidden="true" />
          <span className="newsletter-star star-top" aria-hidden="true">✦</span>
          <span className="newsletter-star star-bottom" aria-hidden="true">✦</span>
          <div className="newsletter-content"><p>Newsletter</p><h2>Enter<br />the orbit</h2><form onSubmit={(event) => event.preventDefault()}><label><span className="sr-only">Email address</span><input type="email" placeholder="email" required /></label><button type="submit">Join <ArrowRight /></button></form></div>
        </div>
      </section>

      <footer className="footer"><div className="footer-links"><div><a href="#shop">Shop</a><a href="#new">New in</a><a href="#editorial">Editorial</a></div><div><a href="#top">Instagram</a><a href="#top">TikTok</a><a href="#top">Pinterest</a></div><div><a href="#top">Shipping</a><a href="#top">Returns</a><a href="#top">Contact</a></div></div><div className="footer-wordmark">MIRAVEL</div><div className="footer-legal"><span>© 2026 MIRAVEL</span><span>NEW PERSPECTIVE / SAME ENERGY</span><span>PRIVACY / TERMS</span></div></footer>
      {added && <div className="added-toast" role="status"><Check /> Halo bag added</div>}
    </main>
  );
}
