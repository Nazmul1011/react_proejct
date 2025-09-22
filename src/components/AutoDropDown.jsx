import { useEffect, useRef } from "react";

export default function AuthDropdowns() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const list = Array.from(wrap.querySelectorAll("details"));

    const handleToggle = (e) => {
      const current = e.currentTarget;
      if (current.open) {
        list.forEach(d => { if (d !== current) d.open = false; });
      }
    };

    list.forEach(d => d.addEventListener("toggle", handleToggle));
    return () => list.forEach(d => d.removeEventListener("toggle", handleToggle));
  }, []);

  return (
    <div ref={wrapRef} className="flex gap-2">
      {/* Login */}
      <details className="dropdown">
        <summary className="btn bg-primary list-none  text-white hover:bg-blue-700" >Login</summary>
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-40 p-2 shadow ">
          <li><a >User</a></li>
          <li><a>Admin</a></li>
        </ul>
      </details>

      {/* Sign Up */}
      <details className="dropdown">
        <summary className="btn btn-outline btn-primary list-none">Sign Up</summary>
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-40 p-2 shadow">
          <li><a>User</a></li>
          <li><a>Admin</a></li>
        </ul>
      </details>
    </div>
  );
}
