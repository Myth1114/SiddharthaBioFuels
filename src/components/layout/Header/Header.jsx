import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./Header.css";

import { primaryNavigation } from "../../../data/navigation";
import Button from "../../ui/Button";
import Container from "../Container";

function getDesktopLinkClass({ isActive }) {
  return ["site-header__link", isActive ? "site-header__link--active" : ""]
    .filter(Boolean)
    .join(" ");
}

function getMobileLinkClass({ isActive }) {
  return ["mobile-menu__link", isActive ? "mobile-menu__link--active" : ""]
    .filter(Boolean)
    .join(" ");
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const location = useLocation();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function closeMenuAndRestoreFocus() {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 64rem)");

    function handleDesktopChange(event) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    desktopQuery.addEventListener("change", handleDesktopChange);
    return () =>
      desktopQuery.removeEventListener("change", handleDesktopChange);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyboard(event) {
      if (event.key === "Escape") {
        closeMenuAndRestoreFocus();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusableElements = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <Container width="wide">
          <div className="site-header__inner">
            <Link
              className="site-header__brand"
              to="/"
              aria-label="Siddhartha Bio Fuels home"
            >
              <span className="site-header__brand-primary">Siddhartha</span>
              <span className="site-header__brand-secondary">Bio Fuels</span>
            </Link>

            <nav
              className="site-header__desktop-nav"
              aria-label="Primary navigation"
            >
              {primaryNavigation.map((item) => (
                <NavLink
                  key={item.to}
                  className={getDesktopLinkClass}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <Button
              as={Link}
              className="site-header__quote"
              to="/request-a-quote"
              size="small"
            >
              Request a Quote
            </Button>

            <button
              ref={menuButtonRef}
              className="site-header__menu-button"
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label="Open navigation"
              onClick={() => setIsMenuOpen(true)}
            >
              {/* <span className="sr-only">Open navigation</span> */}
              <span className="site-header__menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {isMenuOpen &&
        createPortal(
          <div className="mobile-menu">
            <button
              className="mobile-menu__backdrop"
              type="button"
              aria-label="Close navigation"
              onClick={closeMenuAndRestoreFocus}
            />

            <aside
              ref={drawerRef}
              id="mobile-menu-drawer"
              className="mobile-menu__drawer"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              <div className="mobile-menu__header">
                <div className="mobile-menu__brand" id="mobile-menu-title">
                  <span>Siddhartha</span>
                  <span>Bio Fuels</span>
                </div>

                <button
                  ref={closeButtonRef}
                  className="mobile-menu__close"
                  type="button"
                  aria-label="Close navigation"
                  onClick={closeMenuAndRestoreFocus}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              </div>

              <nav
                className="mobile-menu__navigation"
                aria-label="Mobile navigation"
              >
                {primaryNavigation.map((item, index) => (
                  <NavLink
                    key={item.to}
                    className={getMobileLinkClass}
                    to={item.to}
                    onClick={closeMenu}
                  >
                    <span className="mobile-menu__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </nav>

              <div className="mobile-menu__footer">
                <Button as={Link} to="/request-a-quote" fullWidth>
                  Request a Quote
                </Button>
                <a className="mobile-menu__phone" href="tel:+9779857839100">
                  +977 9857839100
                </a>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}

export default Header;
