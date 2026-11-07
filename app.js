// =========================================================
// BONGZ 'N RECORDZ - REAL-TIME DATABASE & STATE ENGINE
// =========================================================

const DEFAULT_INVENTORY = [
    { id: "item1", name: "Crimson Kush (Top-Shelf Bud)", category: "Top-Shelf Bud", price: 180, unit: "g", stock: 45, color: "var(--slime-green)", desc: "Deep berry notes, heavy trichome coverage. Indoor heavyweight." },
    { id: "item2", name: "Lemon Haze (Top-Shelf Bud)", category: "Top-Shelf Bud", price: 160, unit: "g", stock: 30, color: "var(--slime-green)", desc: "Sativa-dominant energetic buzz with a sharp citrus terpene punch." },
    { id: "item3", name: "Braam Green Trees (Outdoor)", category: "Trees", price: 80, unit: "g", stock: 120, color: "var(--rastas-yellow)", desc: "Earthy, grounding local outdoor smoke for a heavy social session." },
    { id: "item4", name: "Swazi Gold Hybrid Trees", category: "Trees", price: 100, unit: "g", stock: 65, color: "var(--rastas-yellow)", desc: "Classic African sativa landrace hybrid with a soaring high." },
    { id: "item5", name: "Cosmic Moonsticks (Infused)", category: "Moonsticks", price: 250, unit: "stick", stock: 14, color: "var(--rastas-red)", desc: "Premium flower infused with distillate and rolled in pure kief." },
    { id: "item6", name: "Dub & Reggae Vinyl Crate", category: "Vinyl Recordz", price: 300, unit: "crate", stock: 8, color: "var(--rastas-red)", desc: "Hand-picked classic pressings imported for genuine sound lovers." }
];

const DEMO_USERS = {
    "daytripper@bongz.co.za": {
        email: "daytripper@bongz.co.za",
        name: "Thabo M.",
        role: "member",
        tier: 1,
        tierName: "The 45 RPM Pass (Day Tripper)",
        discount: 0.05,
        cardId: "BNR-45-0891",
        perks: "5% Off Storewide • Online Vault Access • Monthly Mixtape"
    },
    "backstage@bongz.co.za": {
        email: "backstage@bongz.co.za",
        name: "Lerato K.",
        role: "member",
        tier: 2,
        tierName: "The Gold LP Card (Backstage Pass)",
        discount: 0.15,
        cardId: "BNR-LP-0420",
        perks: "15% Off Herb & Vinyl • VIP Braam Lounge Access • First Drop Picks"
    },
    "honcho@bongz.co.za": {
        email: "honcho@bongz.co.za",
        name: "Kamogelo F.",
        role: "member",
        tier: 3,
        tierName: "The Platinum Dubplate (Head Honcho)",
        discount: 0.25,
        cardId: "BNR-DUB-0001",
        perks: "25% Off Everything • Glassware Locker #01 • Unlimited Lounge + Guest Pass"
    },
    "staff@bongz.co.za": {
        email: "staff@bongz.co.za",
        name: "Braam Counter Admin",
        role: "staff"
    }
};

// Initialize Database if empty
function initDB() {
    if (!localStorage.getItem("bnr_inventory")) {
        localStorage.setItem("bnr_inventory", JSON.stringify(DEFAULT_INVENTORY));
    }
    if (!localStorage.getItem("bnr_orders")) {
        localStorage.setItem("bnr_orders", JSON.stringify([]));
    }
}

function getInventory() {
    initDB();
    return JSON.parse(localStorage.getItem("bnr_inventory"));
}

function saveInventory(items) {
    localStorage.setItem("bnr_inventory", JSON.stringify(items));
}

function getOrders() {
    initDB();
    return JSON.parse(localStorage.getItem("bnr_orders"));
}

function saveOrders(orders) {
    localStorage.setItem("bnr_orders", JSON.stringify(orders));
}

function getCurrentUser() {
    const user = localStorage.getItem("bnr_current_user");
    return user ? JSON.parse(user) : null;
}

function loginWithEmail(email) {
    const cleanEmail = email.trim().toLowerCase();
    const account = DEMO_USERS[cleanEmail];
    if (!account) return null;
    localStorage.setItem("bnr_current_user", JSON.stringify(account));
    return account;
}

function logoutUser() {
    localStorage.removeItem("bnr_current_user");
    window.location.href = "login.html";
}

// Automatically initialize on load
initDB();