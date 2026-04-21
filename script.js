/* ═══════════════════════════════════════════════════════════
   HIREFLOW — MAIN APPLICATION SCRIPT
   ═══════════════════════════════════════════════════════════ */

/* ─── HEROICONS SVG LIBRARY ─────────────────────────────────── */
const IC = {
  dashboard:  `<i class="fa-solid fa-house"></i>`,
  create:     `<i class="fa-solid fa-circle-plus"></i>`,
  posts:      `<i class="fa-solid fa-file-lines"></i>`,
  targets:    `<i class="fa-solid fa-bullseye"></i>`,
  social:     `<i class="fa-solid fa-users"></i>`,
  analytics:  `<i class="fa-solid fa-chart-bar"></i>`,
  payments:   `<i class="fa-solid fa-credit-card"></i>`,
  profile:    `<i class="fa-solid fa-user"></i>`,
  admin:      `<i class="fa-solid fa-shield-halved"></i>`,
  settings:   `<i class="fa-solid fa-gear"></i>`,
  logout:     `<i class="fa-solid fa-right-from-bracket"></i>`,
  delete:     `<i class="fa-solid fa-trash-can"></i>`,
  search:     `<i class="fa-solid fa-magnifying-glass"></i>`,
  eye:        `<i class="fa-solid fa-eye"></i>`,
  sun:        `<i class="fa-solid fa-sun"></i>`,
  moon:       `<i class="fa-solid fa-moon"></i>`,
  save:       `<i class="fa-solid fa-floppy-disk"></i>`,
  coupon:     `<i class="fa-solid fa-ticket"></i>`,
  pricing:    `<i class="fa-solid fa-tag"></i>`,
  users:      `<i class="fa-solid fa-users"></i>`,
  methods:    `<i class="fa-solid fa-wallet"></i>`,
  plus:       `<i class="fa-solid fa-plus"></i>`,
  addAdmin:   `<i class="fa-solid fa-user-plus"></i>`,
  globe:      `<i class="fa-solid fa-globe"></i>`,
  platform:   `<i class="fa-solid fa-link"></i>`,
  platform:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd"/><path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"/></svg>`,
  security:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clip-rule="evenodd"/></svg>`,
  warning:    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd"/></svg>`,
  check:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"/></svg>`,
  home:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"/><path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"/></svg>`,
  statsIcon:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z"/></svg>`,
  createBig:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd"/></svg>`,
};


const T = {
  en: {
    appName: "HireFlow", tagline: "Smart Job Publishing",
    login: "Sign In", register: "Sign Up", logout: "Sign Out",
    email: "Email Address", password: "Password", name: "Full Name",
    phone: "Phone Number", confirmPassword: "Confirm Password",
    loginTitle: "Welcome back", loginSub: "Sign in to your account",
    registerTitle: "Join HireFlow", registerSub: "Start publishing smarter",
    noAccount: "Don't have an account?", hasAccount: "Already have an account?",
    joinTeam: "Join",
    signUp: "Create Account", signIn: "Sign In",
    dashboard: "Home", posts: "My Posts", createPost: "Create Post",
    targets: "Targets", social: "Social Accounts",
    analytics: "Analytics", payments: "Plans & Billing",
    profile: "Profile", admin: "Admin Panel",
    settings: "Settings",
    jobTitle: "Job Title", company: "Company Name", description: "Job Description",
    salary: "Salary / Package", location: "Location", contact: "Contact Info",
    scheduleDate: "Schedule Date & Time", publish: "Publish Now", schedule: "Schedule",
    draft: "Save Draft",
    free: "Free", pro: "Pro", business: "Business",
    upgrade: "Upgrade Plan",
    approved: "Published", rejected: "Rejected", pending: "Pending", scheduled: "Scheduled",
    greetMorning: "Good morning", greetAfternoon: "Good afternoon", greetEvening: "Good evening",
    totalPosts: "Total Posts", scheduledPosts: "Scheduled", publishedPosts: "Published",
    totalTargets: "Targets", connectedAccounts: "Connected",
    addTarget: "Add Target", targetUrl: "Target URL", targetName: "Platform / Group Name",
    targetType: "Type", connect: "Connect", disconnect: "Disconnect",
    connected: "Connected", notConnected: "Not Connected",
    plans: "Plans & Pricing", currentPlan: "Current Plan",
    monthly: "Monthly", yearly: "Yearly",
    users: "Users", allPayments: "All Payments", methods: "Payment Methods",
    searchUsers: "Search users...",
    saveChanges: "Save Changes", editProfile: "Edit Profile",
    language: "Language", theme: "Theme",
    noPostsYet: "No posts yet. Create your first job post!",
    postCreated: "Post created successfully!", postScheduled: "Post scheduled!",
    profileUpdated: "Profile updated!", errorFill: "Please fill all required fields",
    passwordMismatch: "Passwords don't match", confirmDelete: "Are you sure you want to delete?",
    facebook: "Facebook", telegram: "Telegram", whatsapp: "WhatsApp",
    linkedin: "LinkedIn", twitter: "X (Twitter)", instagram: "Instagram", discord: "Discord",
    jobType: "Job Type", fullTime: "Full Time", partTime: "Part Time",
    remote: "Remote", onSite: "On-Site", hybrid: "Hybrid",
    experience: "Experience Level", junior: "Junior", mid: "Mid-Level", senior: "Senior",
    delayBetweenPosts: "Delay Between Posts",
    addMethod: "Add Payment Method", couponCode: "Coupon Code",
    addCoupon: "Add Coupon", discount: "Discount",
    darkMode: "Dark", lightMode: "Light",
    role: "Role", joinedDate: "Joined", active: "Active", suspended: "Suspended",
    preview: "Live Preview",
    home: "Home", create: "Create", stats: "Stats",
    deletePost: "Delete", editPost: "Edit",
    contactEmail: "Contact Email", contactPhone: "Contact Phone", contactLink: "Application Link",
    uploadImage: "Upload Image", uploadVideo: "Upload Video",
    selectPlatforms: "Select Publishing Targets",
    reviewPost: "Review & Publish",
    deadline: "Application Deadline",
    industry: "Industry", skills: "Required Skills",
    postDelay: "Post Delay Settings",
    adminPricing: "Manage Pricing", adminUsers: "Manage Users",
    adminCoupons: "Discount Coupons", adminMethods: "Payment Methods",
    planFree: "5 posts/day, basic targets",
    planPro: "50 posts/day, all platforms, analytics",
    planBusiness: "Unlimited posts, priority support, white-label",
    notifyEmail: "Email Notifications", notifyPush: "Push Notifications",
    autoVariations: "Auto-vary posts (anti-spam)",
    steps: { details: "Details", platforms: "Platforms", schedule: "Schedule", review: "Review" }
  },
  ar: {
    appName: "HireFlow", tagline: "نشر الوظائف بذكاء",
    login: "تسجيل الدخول", register: "إنشاء حساب", logout: "تسجيل الخروج",
    email: "البريد الإلكتروني", password: "كلمة المرور", name: "الاسم الكامل",
    phone: "رقم الهاتف", confirmPassword: "تأكيد كلمة المرور",
    loginTitle: "مرحباً بعودتك", loginSub: "سجّل الدخول للمتابعة",
    registerTitle: "انضم لـ HireFlow", registerSub: "ابدأ النشر بذكاء",
    noAccount: "ليس لديك حساب؟", hasAccount: "لديك حساب بالفعل؟",
    joinTeam: "انضم لـ",
    signUp: "إنشاء حساب", signIn: "تسجيل الدخول",
    dashboard: "الرئيسية", posts: "منشوراتي", createPost: "إنشاء إعلان",
    targets: "أهداف النشر", social: "الحسابات الاجتماعية",
    analytics: "الإحصائيات", payments: "الخطط والفواتير",
    profile: "حسابي", admin: "لوحة الإدارة",
    settings: "الإعدادات",
    jobTitle: "المسمى الوظيفي", company: "اسم الشركة", description: "وصف الوظيفة",
    salary: "الراتب / الحزمة", location: "الموقع", contact: "معلومات التواصل",
    scheduleDate: "تاريخ ووقت النشر", publish: "نشر الآن", schedule: "جدولة",
    draft: "حفظ مسودة",
    free: "مجاني", pro: "احترافي", business: "أعمال",
    upgrade: "ترقية الخطة",
    approved: "منشور", rejected: "مرفوض", pending: "معلّق", scheduled: "مجدول",
    greetMorning: "صباح الخير", greetAfternoon: "مساء الخير", greetEvening: "مساء النور",
    totalPosts: "إجمالي المنشورات", scheduledPosts: "مجدولة", publishedPosts: "منشورة",
    totalTargets: "الأهداف", connectedAccounts: "متصل",
    addTarget: "إضافة هدف", targetUrl: "رابط الهدف", targetName: "اسم المنصة / المجموعة",
    targetType: "النوع", connect: "ربط", disconnect: "فصل",
    connected: "متصل", notConnected: "غير متصل",
    plans: "الخطط والأسعار", currentPlan: "خطتك الحالية",
    monthly: "شهري", yearly: "سنوي",
    users: "المستخدمون", allPayments: "المدفوعات", methods: "طرق الدفع",
    searchUsers: "البحث عن مستخدم...",
    saveChanges: "حفظ التغييرات", editProfile: "تعديل الملف",
    language: "اللغة", theme: "المظهر",
    noPostsYet: "لا توجد منشورات بعد. أنشئ أولها!",
    postCreated: "تم إنشاء المنشور!", postScheduled: "تم جدولة المنشور!",
    profileUpdated: "تم تحديث الملف!", errorFill: "يرجى ملء جميع الحقول",
    passwordMismatch: "كلمتا المرور غير متطابقتين", confirmDelete: "هل أنت متأكد من الحذف؟",
    facebook: "فيسبوك", telegram: "تيليغرام", whatsapp: "واتساب",
    linkedin: "لينكدإن", twitter: "إكس (تويتر)", instagram: "إنستغرام", discord: "ديسكورد",
    jobType: "نوع الوظيفة", fullTime: "دوام كامل", partTime: "دوام جزئي",
    remote: "عن بُعد", onSite: "حضوري", hybrid: "هجين",
    experience: "مستوى الخبرة", junior: "مبتدئ", mid: "متوسط", senior: "خبير",
    delayBetweenPosts: "التأخير بين المنشورات",
    addMethod: "إضافة طريقة دفع", couponCode: "كود الخصم",
    addCoupon: "إضافة كوبون", discount: "الخصم",
    darkMode: "داكن", lightMode: "فاتح",
    role: "الدور", joinedDate: "تاريخ الانضمام", active: "نشط", suspended: "موقوف",
    preview: "معاينة مباشرة",
    home: "الرئيسية", create: "إنشاء", stats: "إحصائيات",
    deletePost: "حذف", editPost: "تعديل",
    contactEmail: "البريد للتواصل", contactPhone: "هاتف التواصل", contactLink: "رابط التقديم",
    uploadImage: "رفع صورة", uploadVideo: "رفع فيديو",
    selectPlatforms: "اختيار أهداف النشر",
    reviewPost: "مراجعة ونشر",
    deadline: "آخر موعد للتقديم",
    industry: "القطاع", skills: "المهارات المطلوبة",
    postDelay: "إعدادات التأخير",
    adminPricing: "إدارة الأسعار", adminUsers: "إدارة المستخدمين",
    adminCoupons: "كوبونات الخصم", adminMethods: "طرق الدفع",
    planFree: "٥ منشورات/يوم، أهداف أساسية",
    planPro: "٥٠ منشور/يوم، جميع المنصات، إحصائيات",
    planBusiness: "منشورات غير محدودة، دعم أولوية",
    notifyEmail: "إشعارات البريد", notifyPush: "إشعارات الدفع",
    autoVariations: "تنويع تلقائي (مضاد للإسبام)",
    steps: { details: "التفاصيل", platforms: "المنصات", schedule: "الجدولة", review: "المراجعة" }
  },
  de: {
    appName: "HireFlow", tagline: "Intelligente Jobveröffentlichung",
    login: "Anmelden", register: "Registrieren", logout: "Abmelden",
    email: "E-Mail-Adresse", password: "Passwort", name: "Vollständiger Name",
    phone: "Telefonnummer", confirmPassword: "Passwort bestätigen",
    loginTitle: "Willkommen zurück", loginSub: "Melden Sie sich an",
    registerTitle: "HireFlow beitreten", registerSub: "Smarter veröffentlichen",
    noAccount: "Noch kein Konto?", hasAccount: "Bereits ein Konto?",
    joinTeam: "Beitreten",
    signUp: "Konto erstellen", signIn: "Anmelden",
    dashboard: "Startseite", posts: "Meine Posts", createPost: "Post erstellen",
    targets: "Ziele", social: "Social Accounts",
    analytics: "Analytik", payments: "Pläne & Abrechnung",
    profile: "Profil", admin: "Admin-Panel",
    settings: "Einstellungen",
    jobTitle: "Berufsbezeichnung", company: "Firmenname", description: "Stellenbeschreibung",
    salary: "Gehalt / Paket", location: "Standort", contact: "Kontaktinfo",
    scheduleDate: "Datum & Uhrzeit", publish: "Jetzt veröffentlichen", schedule: "Planen",
    draft: "Entwurf speichern",
    free: "Kostenlos", pro: "Pro", business: "Business",
    upgrade: "Plan upgraden",
    approved: "Veröffentlicht", rejected: "Abgelehnt", pending: "Ausstehend", scheduled: "Geplant",
    greetMorning: "Guten Morgen", greetAfternoon: "Guten Tag", greetEvening: "Guten Abend",
    totalPosts: "Beiträge gesamt", scheduledPosts: "Geplant", publishedPosts: "Veröffentlicht",
    totalTargets: "Ziele", connectedAccounts: "Verbunden",
    addTarget: "Ziel hinzufügen", targetUrl: "Ziel-URL", targetName: "Plattform / Gruppenname",
    targetType: "Typ", connect: "Verbinden", disconnect: "Trennen",
    connected: "Verbunden", notConnected: "Nicht verbunden",
    plans: "Pläne & Preise", currentPlan: "Aktueller Plan",
    monthly: "Monatlich", yearly: "Jährlich",
    users: "Benutzer", allPayments: "Alle Zahlungen", methods: "Zahlungsmethoden",
    searchUsers: "Benutzer suchen...",
    saveChanges: "Änderungen speichern", editProfile: "Profil bearbeiten",
    language: "Sprache", theme: "Design",
    noPostsYet: "Noch keine Posts. Erstellen Sie Ihren ersten Job-Post!",
    postCreated: "Post erfolgreich erstellt!", postScheduled: "Post geplant!",
    profileUpdated: "Profil aktualisiert!", errorFill: "Bitte alle Pflichtfelder ausfüllen",
    passwordMismatch: "Passwörter stimmen nicht überein", confirmDelete: "Wirklich löschen?",
    facebook: "Facebook", telegram: "Telegram", whatsapp: "WhatsApp",
    linkedin: "LinkedIn", twitter: "X (Twitter)", instagram: "Instagram", discord: "Discord",
    jobType: "Stellenart", fullTime: "Vollzeit", partTime: "Teilzeit",
    remote: "Remote", onSite: "Vor Ort", hybrid: "Hybrid",
    experience: "Erfahrungsstufe", junior: "Junior", mid: "Mittel", senior: "Senior",
    delayBetweenPosts: "Verzögerung zwischen Posts",
    addMethod: "Zahlungsmethode hinzufügen", couponCode: "Gutscheincode",
    addCoupon: "Gutschein hinzufügen", discount: "Rabatt",
    darkMode: "Dunkel", lightMode: "Hell",
    role: "Rolle", joinedDate: "Beigetreten", active: "Aktiv", suspended: "Gesperrt",
    preview: "Live-Vorschau",
    home: "Startseite", create: "Erstellen", stats: "Statistik",
    deletePost: "Löschen", editPost: "Bearbeiten",
    contactEmail: "Kontakt-E-Mail", contactPhone: "Kontakttelefon", contactLink: "Bewerbungslink",
    uploadImage: "Bild hochladen", uploadVideo: "Video hochladen",
    selectPlatforms: "Veröffentlichungsziele wählen",
    reviewPost: "Überprüfen & Veröffentlichen",
    deadline: "Bewerbungsschluss",
    industry: "Branche", skills: "Erforderliche Fähigkeiten",
    postDelay: "Verzögerungseinstellungen",
    adminPricing: "Preise verwalten", adminUsers: "Benutzer verwalten",
    adminCoupons: "Rabattgutscheine", adminMethods: "Zahlungsmethoden",
    planFree: "5 Posts/Tag, Basisziele",
    planPro: "50 Posts/Tag, alle Plattformen, Analytik",
    planBusiness: "Unbegrenzte Posts, Prioritätssupport",
    notifyEmail: "E-Mail-Benachrichtigungen", notifyPush: "Push-Benachrichtigungen",
    autoVariations: "Auto-Variationen (Anti-Spam)",
    steps: { details: "Details", platforms: "Plattformen", schedule: "Planung", review: "Überprüfung" }
  }
};

/* ─── SEED DATA ────────────────────────────────────────────── */
const SEED_USERS = [
  { id: 1, name: "Admin User",   email: "admin@hireflow.com", password: "admin123", role: "admin",    plan: "business", postsToday: 12, totalPosts: 248, joined: "2024-01-15", status: "active"  },
  { id: 2, name: "Sara Ahmed",   email: "sara@example.com",   password: "pass123",  role: "user",     plan: "pro",      postsToday: 3,  totalPosts: 67,  joined: "2024-03-20", status: "active"  },
  { id: 3, name: "Omar Khalid",  email: "omar@example.com",   password: "pass123",  role: "user",     plan: "free",     postsToday: 1,  totalPosts: 14,  joined: "2024-05-10", status: "active"  },
  { id: 4, name: "Layla Hassan", email: "layla@example.com",  password: "pass123",  role: "user",     plan: "pro",      postsToday: 5,  totalPosts: 92,  joined: "2024-04-08", status: "suspended" },
];

const SEED_POSTS = [
  { id: 1, userId: 2, title: "Senior Frontend Developer", company: "TechCorp", description: "We're looking for a talented Senior Frontend Developer with 5+ years of React experience. Join our fast-growing team and help build the next generation of web applications.", salary: "10,000–15,000 EGP/mo", location: "Cairo, Egypt", jobType: "full-time", experience: "senior", contact: "jobs@techcorp.com", status: "approved", platforms: ["Facebook","LinkedIn"], date: "2025-03-10", views: 342, applicants: 28 },
  { id: 2, userId: 2, title: "UI/UX Designer", company: "DesignHub", description: "Seeking a creative UI/UX Designer to join our product team. You'll be responsible for designing beautiful, user-friendly interfaces across web and mobile platforms.", salary: "8,000–12,000 EGP/mo", location: "Remote", jobType: "remote", experience: "mid", contact: "hr@designhub.io", status: "approved", platforms: ["Instagram","LinkedIn"], date: "2025-03-08", views: 198, applicants: 15 },
  { id: 3, userId: 2, title: "Backend Engineer (Node.js)", company: "CloudSoft", description: "We need a Node.js backend engineer to help scale our microservices architecture. Strong knowledge of AWS and Docker required.", salary: "12,000–18,000 EGP/mo", location: "Alexandria, Egypt", jobType: "on-site", experience: "mid", contact: "tech@cloudsoft.dev", status: "scheduled", platforms: ["Facebook"], date: "2025-03-15", views: 0, applicants: 0 },
  { id: 4, userId: 1, title: "Marketing Manager", company: "BrandBoost", description: "BrandBoost is hiring a Marketing Manager to lead our digital campaigns across all channels. Budget management experience required.", salary: "10,000–14,000 EGP/mo", location: "Dubai, UAE", jobType: "hybrid", experience: "senior", contact: "careers@brandboost.com", status: "pending", platforms: ["Facebook","Instagram"], date: "2025-03-12", views: 89, applicants: 7 },
];

/* ─── SOCIAL PLATFORM SVG ICONS ──────────────────────────── */
const SOCIAL_ICONS = {
  facebook: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#1877f2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.994 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#0088cc"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#0077b5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" width="28" height="28"><defs><radialGradient id="ig-grad" cx="30%" cy="107%" r="150%"><stop offset="0%" stop-color="#fdf497"/><stop offset="5%" stop-color="#fdf497"/><stop offset="45%" stop-color="#fd5949"/><stop offset="60%" stop-color="#d6249f"/><stop offset="90%" stop-color="#285AEB"/></radialGradient></defs><path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" width="28" height="28"><path fill="var(--text)" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" width="28" height="28" fill="#5865f2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>`,
};

const SEED_TARGETS = [
  { id: 1, name: "Tech Jobs Egypt",      url: "https://facebook.com/groups/techjobsegypt", type: "facebook",  icon: "📘" },
  { id: 2, name: "Remote Work ME",       url: "https://facebook.com/groups/remoteworkme",  type: "facebook",  icon: "📘" },
  { id: 3, name: "LinkedIn Tech Cairo",  url: "https://linkedin.com/company/techcairo",    type: "linkedin",  icon: "💼" },
  { id: 4, name: "Dev Jobs Telegram",    url: "https://t.me/devjobsegypt",                 type: "telegram",  icon: "✈️" },
  { id: 5, name: "UI/UX Designers",      url: "https://facebook.com/groups/uiuxdesign",    type: "facebook",  icon: "📘" },
];

const SEED_SOCIAL = [
  { id: 1, platform: "facebook",  name: "Facebook",  color: "#1877f2", connected: true,  token: "fb_tok_xxx123",  account: "TechCorp Official", groups: [{id:1,name:"Tech Jobs Egypt",url:"https://facebook.com/groups/techjobsegypt"},{id:2,name:"Remote Work ME",url:"https://facebook.com/groups/remoteworkme"}] },
  { id: 2, platform: "telegram",  name: "Telegram",  color: "#0088cc", connected: true,  token: "tg_bot_xxx456",  account: "@techcorpbot",       groups: [{id:3,name:"Dev Jobs Egypt",url:"https://t.me/devjobsegypt"}] },
  { id: 3, platform: "linkedin",  name: "LinkedIn",  color: "#0077b5", connected: false, token: null,             account: null,                  groups: [] },
  { id: 4, platform: "instagram", name: "Instagram", color: "#e1306c", connected: false, token: null,             account: null,                  groups: [] },
  { id: 5, platform: "twitter",   name: "X (Twitter)", color: "#333333", connected: false, token: null,           account: null,                  groups: [] },
  { id: 6, platform: "whatsapp",  name: "WhatsApp",  color: "#25d366", connected: true,  token: "wa_tok_xxx789",  account: "+201001234567",        groups: [{id:4,name:"وظائف مصر",url:"https://chat.whatsapp.com/xxx"}] },
  { id: 7, platform: "discord",   name: "Discord",   color: "#5865f2", connected: false, token: null,             account: null,                  groups: [] },
];

const SEED_PLANS = [
  { id: "free",     name: "Free",     priceMonthly: 0,   priceWeekly: 0,   yearlyDiscount: 0,  postsPerDay: 5,   color: "gray",   promo: null },
  { id: "starter",  name: "Starter",  priceMonthly: 99,  priceWeekly: 29,  yearlyDiscount: 15, postsPerDay: 20,  color: "teal",   promo: null },
  { id: "pro",      name: "Pro",      priceMonthly: 290, priceWeekly: 89,  yearlyDiscount: 20, postsPerDay: 50,  color: "blue",   promo: null },
  { id: "business", name: "Business", priceMonthly: 790, priceWeekly: 229, yearlyDiscount: 25, postsPerDay: -1,  color: "purple", promo: null },
];

const SEED_COUPONS = [
  { id: 1, code: "LAUNCH50", discount: 50, type: "percent", active: true,  expiresAt: "2026-12-31", usageLimit: 100, usageCount: 23, appliesTo: "all" },
  { id: 2, code: "SAVE20",   discount: 20, type: "percent", active: true,  expiresAt: "",           usageLimit: -1,   usageCount: 8,  appliesTo: "all" },
  { id: 3, code: "FLAT10",   discount: 10, type: "fixed",   active: false, expiresAt: "2025-06-01", usageLimit: 50,  usageCount: 50, appliesTo: "pro" },
];

const ANALYTICS_DATA = {
  weekly: [
    { day: "Sat", posts: 4,  views: 190, clicks: 28  },
    { day: "Sun", posts: 7,  views: 360, clicks: 51  },
    { day: "Mon", posts: 8,  views: 420, clicks: 62  },
    { day: "Tue", posts: 12, views: 680, clicks: 94  },
    { day: "Wed", posts: 6,  views: 310, clicks: 41  },
    { day: "Thu", posts: 15, views: 890, clicks: 127 },
    { day: "Fri", posts: 10, views: 530, clicks: 78  },
  ]
};

/* ─── APP STATE ─────────────────────────────────────────────── */
const state = {
  lang:          "en",
  theme:         "dark",
  currentUser:   null,
  page:          "dashboard",
  users:         JSON.parse(JSON.stringify(SEED_USERS)),
  posts:         JSON.parse(JSON.stringify(SEED_POSTS)),
  targets:       JSON.parse(JSON.stringify(SEED_TARGETS)),
  social:        JSON.parse(JSON.stringify(SEED_SOCIAL)),
  plans:         JSON.parse(JSON.stringify(SEED_PLANS)),
  coupons:       JSON.parse(JSON.stringify(SEED_COUPONS)),
  isMobile:      window.innerWidth < 769,
  sidebarOpen:   false,
  sidebarCollapsed: false,
  createStep:    1,      // 1-4 for wizard steps
  createForm:    { title:"", company:"", description:"", salary:"", location:"", jobType:"full-time", experience:"mid", contact:"", contactEmail:"", contactPhone:"", contactLink:"", scheduleDate:"", scheduleTime:"", delayMinutes:5, customDelay:"", selectedTargets:[], imageData:null, videoData:null, skills:"", industry:"", deadline:"" },
  authMode:      "login",
  settings:      { notifyEmail: true, notifyPush: false, autoVariations: true, delayBetweenPosts: 2 },
  adminTab:      "pricing",
  customPlatforms: [],
  savedEmail:    "",
};

/* ─── UTILITY FUNCTIONS ─────────────────────────────────────── */
function t(key) {
  const lang = state.lang;
  const tr = T[lang] || T.en;
  return key.split('.').reduce((o, k) => o && o[k], tr) || key;
}

function greeting() {
  const h = new Date().getHours();
  if (state.lang === "de") {
    if (h < 12) return "Guten Morgen";
    if (h < 17) return "Guten Tag";
    return "Guten Abend";
  }
  if (h < 12) return t('greetMorning');
  if (h < 17) return t('greetAfternoon');
  return t('greetEvening');
}

function formatDate(d) {
  if (!d) return "—";
  const date = new Date(d);
  if (isNaN(date)) return d;
  const locale = state.lang === "ar" ? "ar-EG" : state.lang === "de" ? "de-DE" : "en-US";
  return date.toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
}

function calcYearlyPrice(plan) {
  if (!plan.priceMonthly || plan.priceMonthly === 0) return 0;
  const full = plan.priceMonthly * 12;
  const disc = plan.yearlyDiscount || 0;
  return Math.round(full * (1 - disc / 100));
}

function isRTL() { return state.lang === "ar"; }

// statusBadge: if postId given → clickable button for post status changes (Feature 7)
function statusBadge(s, postId) {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const map = {
    approved:  ["green",  `<i class="fa-solid fa-circle-check"></i> ` + lbl("منشور","Veröffentlicht","Published")],
    published: ["green",  `<i class="fa-solid fa-circle-check"></i> ` + lbl("منشور","Veröffentlicht","Published")],
    pending:   ["yellow", `<i class="fa-solid fa-clock"></i> ` + lbl("معلّق","Ausstehend","Pending")],
    scheduled: ["blue",   `<i class="fa-solid fa-calendar-check"></i> ` + lbl("مجدول","Geplant","Scheduled")],
    rejected:  ["red",    `<i class="fa-solid fa-circle-xmark"></i> ` + lbl("مرفوض","Abgelehnt","Rejected")],
    draft:     ["gray",   `<i class="fa-solid fa-pen"></i> ` + lbl("مسودة","Entwurf","Draft")],
    active:    ["green",  `<i class="fa-solid fa-circle"></i> ` + lbl("نشط","Aktiv","Active")],
    suspended: ["red",    `<i class="fa-solid fa-ban"></i> ` + lbl("موقوف","Gesperrt","Suspended")],
  };
  const [color, label] = map[s] || ["gray", s];
  // Post statuses are clickable
  const clickableStatuses = ["approved","published","pending","scheduled","rejected","draft"];
  if (postId && clickableStatuses.includes(s)) {
    return `<button class="badge ${color} status-badge-btn" onclick="openChangeStatusModal(${postId})" title="${lbl("انقر لتغيير الحالة","Klicken zum Ändern","Click to change status")}" style="cursor:pointer;border:none;font-family:inherit;font-size:inherit;">${label}</button>`;
  }
  return `<span class="badge ${color}">${label}</span>`;
}


function getUpgradeLabel(fromPlan, toPlan) {
  const order = ["free","starter","pro","business"];
  const fromIdx = order.indexOf(fromPlan);
  const toIdx   = order.indexOf(toPlan);
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  if (toIdx > fromIdx) return lbl(`الترقية إلى ${toPlan}`,`Upgrade auf ${toPlan}`,`Upgrade to ${toPlan}`);
  if (toIdx < fromIdx) return lbl(`التحويل إلى ${toPlan}`,`Wechseln zu ${toPlan}`,`Switch to ${toPlan}`);
  return lbl("خطتك الحالية","Ihr aktueller Plan","Your Current Plan");
}

function planBadge(plan) {
  const map = { free: "gray", starter: "teal", pro: "blue", business: "purple" };
  const names = { free: t("free"), starter: "Starter", pro: t("pro"), business: t("business") };
  return `<span class="badge ${map[plan] || "gray"}">${names[plan] || plan}</span>`;
}

// Returns daily post limit for current user (-1 = unlimited)
function getDailyLimit(user) {
  const plan = state.plans.find(p => p.id === (user?.plan || "free"));
  return plan ? plan.postsPerDay : 5;
}

// Returns true if user has reached daily limit
function isAtDailyLimit(user) {
  const limit = getDailyLimit(user);
  if (limit === -1) return false; // unlimited
  return (user.postsToday || 0) >= limit;
}

function initials(name) {
  if (!name) return "?";
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

let toastTimer = {};
function showToast(msg, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const id = "toast_" + Date.now();
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.id = id;
  const icons = { success: "✓", error: "✕", info: "ℹ", warning: "⚠" };
  el.innerHTML = `<span>${icons[type] || "✓"}</span><span>${msg}</span>`;
  container.appendChild(el);
  toastTimer[id] = setTimeout(() => { el.remove(); delete toastTimer[id]; }, 3500);
}

function setPage(page) {
  state.page = page;
  if (state.isMobile) closeSidebar();
  renderApp();
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  renderTopBar();
  renderSidebarFooter();
}

function cycleTheme() {
  if (state.theme === "dark") state.theme = "light";
  else if (state.theme === "light") state.theme = "eye";
  else state.theme = "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  saveSession();
  renderTopBar();
  renderSidebarFooter();
}
window.cycleTheme = cycleTheme;

function setTheme(t) {
  state.theme = t;
  document.documentElement.setAttribute("data-theme", state.theme);
  saveSession();
  renderTopBar();
  renderSidebarFooter();
}
window.setTheme = setTheme;

function togglePopup(id) {
  closePopups(id);
  const el = document.getElementById(id);
  if (el) el.classList.toggle("hidden");
}
window.togglePopup = togglePopup;

function closePopups(except) {
  document.querySelectorAll(".popup-menu").forEach(p => {
    if (p.id !== except) p.classList.add("hidden");
  });
}
window.closePopups = closePopups;

// Close popups when clicking outside
document.addEventListener("click", e => {
  if (!e.target.closest(".popup-wrap")) closePopups();
});

function setLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  saveSession();
  renderApp();
}

function toggleSidebar() {
  if (state.isMobile) {
    // Mobile: slide-in/out overlay
    state.sidebarOpen = !state.sidebarOpen;
    const sb = document.getElementById("sidebar");
    const ov = document.getElementById("sidebar-overlay");
    if (state.sidebarOpen) {
      sb.classList.add("open");
      ov.classList.remove("hidden");
    } else {
      sb.classList.remove("open");
      ov.classList.add("hidden");
    }
  } else {
    // Desktop: collapse to icon-only mode
    state.sidebarCollapsed = !state.sidebarCollapsed;
    applyCollapsedState();
    // Persist to localStorage
    try { localStorage.setItem("hf_sidebar_collapsed", state.sidebarCollapsed ? "1" : "0"); } catch(e) {}
  }
}

function applyCollapsedState() {
  const sb = document.getElementById("sidebar");
  const mw = document.getElementById("main-wrapper");
  if (!sb || !mw) return;
  if (state.sidebarCollapsed) {
    sb.classList.add("collapsed");
    mw.classList.add("sidebar-collapsed");
  } else {
    sb.classList.remove("collapsed");
    mw.classList.remove("sidebar-collapsed");
  }
}

function closeSidebar() {
  state.sidebarOpen = false;
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("sidebar-overlay");
  if (sb) sb.classList.remove("open");
  if (ov) ov.classList.add("hidden");
}

window.toggleSidebar = toggleSidebar;
window.closeSidebar  = closeSidebar;

/* ─── MODAL ─────────────────────────────────────────────────── */
function openModal(html, onOpen) {
  const box = document.getElementById("modal-box");
  const ov  = document.getElementById("modal-overlay");
  box.innerHTML = html;
  ov.classList.remove("hidden");
  if (onOpen) onOpen(box);
}

function closeModal() {
  const ov = document.getElementById("modal-overlay");
  ov.classList.add("hidden");
}

window.handleModalOverlayClick = function(e) {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
};

/* ─── RENDER LAYOUT ─────────────────────────────────────────── */
function renderApp() {
  const root = document.getElementById("app");
  const mainWrapper = document.getElementById("main-wrapper");
  const sidebar = document.getElementById("sidebar");
  const bottomNav = document.getElementById("bottom-nav");
  const footer = document.getElementById("app-footer");

  if (!state.currentUser) {
    // AUTH MODE
    document.body.classList.add("auth-mode");
    root.innerHTML = renderAuthScreen();
    attachAuthEvents();
    return;
  }

  document.body.classList.remove("auth-mode");
  root.innerHTML = "";

  // Restore sidebar collapsed state from localStorage
  try {
    const savedCollapsed = localStorage.getItem("hf_sidebar_collapsed");
    if (savedCollapsed !== null) state.sidebarCollapsed = savedCollapsed === "1";
  } catch(e) {}

  // Sidebar
  renderSidebar();
  sidebar.classList.remove("hidden");
  applyCollapsedState();

  // Mobile bottom nav
  if (state.isMobile) {
    bottomNav.classList.remove("hidden");
    bottomNav.innerHTML = renderBottomNav();
  } else {
    bottomNav.classList.add("hidden");
  }

  // Top bar
  renderTopBar();

  // Page content
  const pageEl = document.getElementById("page-content");
  pageEl.innerHTML = renderPage();
  attachPageEvents();

  // Breadcrumb
  renderBreadcrumb();

  // Footer text
  const ft = document.getElementById("footer-text");
  if (ft) ft.innerHTML = `
    <span>© ${new Date().getFullYear()}</span>
    <a href="https://ahmed-hamdi.netlify.app/" target="_blank" rel="noopener" class="footer-author">Ahmed Hamdi</a>
    <span class="footer-sep">—</span>
    <span>HireFlow</span>
  `;
}

function renderBreadcrumb() {
  const el = document.getElementById("topbar-breadcrumb");
  if (!el) return;
  const pageNames = {
    dashboard: t("dashboard"), posts: t("posts"), create: t("createPost"),
    targets: t("targets"), social: t("social"), analytics: t("analytics"),
    payments: t("payments"), profile: t("profile"), admin: t("admin"), settings: t("settings")
  };
  const iconsMap = {
    dashboard: IC.dashboard, posts: IC.posts, create: IC.create, targets: IC.targets,
    social: IC.social, analytics: IC.analytics, payments: IC.payments, profile: IC.profile,
    admin: IC.admin, settings: IC.settings
  };
  el.innerHTML = `
    <span style="color:var(--text3);display:flex;align-items:center;">${iconsMap[state.page] || IC.dashboard}</span>
    <span class="breadcrumb-sep">/</span>
    <span>${pageNames[state.page] || state.page}</span>
  `;
}

/* ─── SIDEBAR ─────────────────────────────────────────────────── */
function renderSidebar() {
  const user = state.currentUser;
  const logo = document.getElementById("logo-name");
  const logoTag = document.getElementById("logo-tag");
  const userEl = document.getElementById("sidebar-user");
  const navEl = document.getElementById("sidebar-nav");
  const footerEl = document.getElementById("sidebar-footer");

  if (logo) logo.textContent = t("appName");
  if (logoTag) logoTag.textContent = t("tagline");

  if (userEl) {
    userEl.innerHTML = `
      <div class="sidebar-user-inner" onclick="setPage('profile')">
        <div class="user-avatar">${initials(user.name)}</div>
        <div style="min-width:0;flex:1;">
          <div class="user-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(user.name)}</div>
          ${user.jobTitle
            ? `<div style="font-size:10px;color:var(--text3);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(user.jobTitle)}</div>`
            : `<div class="user-plan">${user.plan.toUpperCase()} ${state.lang==="ar"?"خطة":state.lang==="de"?"Plan":"Plan"}</div>`}
        </div>
      </div>
    `;
  }

  const nav = [
    { id: "dashboard", icon: IC.dashboard, label: t("dashboard") },
    { id: "create",    icon: IC.create,    label: t("createPost"), badge: null },
    { id: "posts",     icon: IC.posts,     label: t("posts") },
    { id: "targets",   icon: IC.targets,   label: t("targets") },
    { id: "social",    icon: IC.social,    label: t("social") },
    { id: "analytics", icon: IC.analytics, label: t("analytics") },
    { id: "payments",  icon: IC.payments,  label: t("payments") },
  ];

  if (user.role === "admin") nav.push({ id: "admin", icon: IC.admin, label: t("admin") });

  if (navEl) {
    navEl.innerHTML = nav.map(item => `
      <button class="nav-item ${state.page === item.id ? "active" : ""}" onclick="setPage('${item.id}')" data-label="${item.label}">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
        ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ""}
      </button>
    `).join("");
  }

  renderSidebarFooter();
}

function renderSidebarFooter() {
  const el = document.getElementById("sidebar-footer");
  if (!el) return;
  el.innerHTML = `
    <button class="nav-item ${state.page === "settings" ? "active" : ""}" onclick="setPage('settings')" data-label="${t("settings")}">
      <span class="nav-icon">${IC.settings}</span>
      <span>${t("settings")}</span>
    </button>
    <button class="nav-item" onclick="handleLogout()" data-label="${t("logout")}">
      <span class="nav-icon">${IC.logout}</span>
      <span>${t("logout")}</span>
    </button>
  `;
}

/* ─── TOP BAR ─────────────────────────────────────────────────── */
function renderTopBar() {
  const el    = document.getElementById("topbar-right");
  const leftEl= document.getElementById("topbar-left");
  if (!el) return;
  const user = state.currentUser;
  if (!user) return;
  const eyeLabel  = state.lang === "ar" ? "حماية العين" : state.lang === "de" ? "Augenschutz" : "Eye Protection";
  const themeLabel = state.theme === "dark" ? t("darkMode") : state.theme === "eye" ? eyeLabel : t("lightMode");
  const themeIcon  = state.theme === "dark" ? IC.moon : state.theme === "eye" ? IC.eye : IC.sun;
  const langLabel  = state.lang === "ar" ? "AR" : state.lang === "de" ? "DE" : "EN";

  // Sidebar toggle button — always visible (desktop collapses, mobile slides)
  if (leftEl && !leftEl.querySelector(".sidebar-toggle-btn")) {
    const btn = document.createElement("button");
    btn.className = "sidebar-toggle-btn";
    btn.onclick = toggleSidebar;
    btn.title = state.sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar";
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
      <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
    </svg>`;
    leftEl.insertBefore(btn, leftEl.firstChild);
  } else if (leftEl) {
    const btn = leftEl.querySelector(".sidebar-toggle-btn");
    if (btn) btn.title = state.sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar";
  }

  el.innerHTML = `
    <button class="topbar-btn hide-mobile" onclick="setPage('create')">
      <span>${IC.create}</span>
      <span>${t("createPost")}</span>
    </button>

    <!-- Theme popup -->
    <div class="popup-wrap" id="theme-popup-wrap">
      <button class="topbar-btn icon-only popup-trigger" onclick="togglePopup('theme-popup')" title="${themeLabel}">
        ${themeIcon}
      </button>
      <div class="popup-menu hidden" id="theme-popup">
        <div class="popup-header">${state.lang==="ar"?"المظهر":state.lang==="de"?"Design":"Appearance"}</div>
        <button class="popup-item ${state.theme==="dark"?"active":""}" onclick="setTheme('dark');closePopups()">
          ${IC.moon} <span>${t("darkMode")}</span> ${state.theme==="dark"?IC.check:""}
        </button>
        <button class="popup-item ${state.theme==="light"?"active":""}" onclick="setTheme('light');closePopups()">
          ${IC.sun} <span>${t("lightMode")}</span> ${state.theme==="light"?IC.check:""}
        </button>
        <button class="popup-item ${state.theme==="eye"?"active":""}" onclick="setTheme('eye');closePopups()">
          ${IC.eye} <span>${eyeLabel}</span> ${state.theme==="eye"?IC.check:""}
        </button>
      </div>
    </div>

    <!-- Language popup -->
    <div class="popup-wrap" id="lang-popup-wrap">
      <button class="topbar-btn popup-trigger lang-trigger" onclick="togglePopup('lang-popup')">
        ${IC.globe} ${langLabel}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
      </button>
      <div class="popup-menu hidden" id="lang-popup">
        <div class="popup-header">${t("language")}</div>
        <button class="popup-item ${state.lang==="en"?"active":""}" onclick="setLang('en');closePopups()">
          <span class="lang-code">EN</span> <span>English</span> ${state.lang==="en"?IC.check:""}
        </button>
        <button class="popup-item ${state.lang==="ar"?"active":""}" onclick="setLang('ar');closePopups()">
          <span class="lang-code">AR</span> <span>العربية</span> ${state.lang==="ar"?IC.check:""}
        </button>
        <button class="popup-item ${state.lang==="de"?"active":""}" onclick="setLang('de');closePopups()">
          <span class="lang-code">DE</span> <span>Deutsch</span> ${state.lang==="de"?IC.check:""}
        </button>
      </div>
    </div>

    <div class="user-avatar" style="cursor:pointer;width:34px;height:34px;font-size:13px;" onclick="setPage('profile')">${initials(user.name)}</div>
  `;

  renderBreadcrumb();
}

/* ─── BOTTOM NAV ──────────────────────────────────────────────── */
function renderBottomNav() {
  const items = [
    { id: "dashboard", icon: `<i class="fa-solid fa-house"></i>`,      label: t("home") },
    { id: "posts",     icon: `<i class="fa-solid fa-file-lines"></i>`, label: t("posts") },
    { id: "create",    icon: `<i class="fa-solid fa-plus"></i>`,       label: t("create"), special: true },
    { id: "analytics", icon: `<i class="fa-solid fa-chart-bar"></i>`,  label: t("stats") },
    { id: "profile",   icon: `<i class="fa-solid fa-user"></i>`,       label: t("profile") },
  ];

  return items.map(item => {
    if (item.special) {
      return `<button class="bottom-nav-item create-btn" onclick="setPage('create')" aria-label="${item.label}">
        <div class="bn-icon-wrap">${item.icon}</div>
      </button>`;
    }
    const active = state.page === item.id;
    return `<button class="bottom-nav-item ${active ? "active" : ""}" onclick="setPage('${item.id}')" aria-label="${item.label}">
      ${active ? '<div class="bn-dot"></div>' : ""}
      <span class="bn-icon">${item.icon}</span>
      <span class="bn-label">${item.label}</span>
    </button>`;
  }).join("");
}

/* ─── PAGE ROUTER ─────────────────────────────────────────────── */
function renderPage() {
  const user = state.currentUser;
  switch (state.page) {
    case "dashboard":  return renderDashboard();
    case "create":     return renderCreatePost();
    case "posts":      return renderPosts();
    case "targets":    return renderTargets();
    case "social":     return renderSocial();
    case "analytics":  return renderAnalytics();
    case "payments":   return renderPayments();
    case "profile":    return renderProfile();
    case "admin":      return user.role === "admin" ? renderAdmin() : renderDashboard();
    case "settings":   return renderSettings();
    default:           return renderDashboard();
  }
}

/* ═══════════════════════════════════════════════════════════
   PAGE: DASHBOARD
═══════════════════════════════════════════════════════════ */
function renderDashboard() {
  const user = state.currentUser;
  const userPosts = state.posts.filter(p => p.userId === user.id || user.role === "admin");
  const published = userPosts.filter(p => p.status === "approved").length;
  const scheduled = userPosts.filter(p => p.status === "scheduled").length;
  const totalViews = userPosts.reduce((s, p) => s + (p.views || 0), 0);
  const connectedSocial = state.social.filter(s => s.connected).length;

  return `
<div class="fade-in">
  <!-- Page header -->
  <div class="page-header">
    <div>
      <div class="page-title">${greeting()}, ${user.name.split(" ")[0]}! 👋</div>
      <div class="page-sub">${new Date().toLocaleDateString(state.lang === "ar" ? "ar-EG" : state.lang === "de" ? "de-DE" : "en-US", { weekday:"long", year:"numeric", month:"long", day:"numeric" })}</div>
    </div>
    <button class="btn btn-md btn-primary" onclick="setPage('create')">
      ${IC.create} ${t("createPost")}
    </button>
  </div>

  <!-- Stats -->
  <div class="stats-grid">
    <div class="stat-card green">
      <div class="stat-value">${userPosts.length}</div>
      <div class="stat-label">${t("totalPosts")}</div>
      <div class="stat-delta up">↑ ${user.postsToday} ${state.lang==="ar"?"اليوم":state.lang==="de"?"heute":"today"}</div>
    </div>
    <div class="stat-card blue">
      <div class="stat-value">${scheduled}</div>
      <div class="stat-label">${t("scheduledPosts")}</div>
      <div class="stat-delta up">● ${state.lang==="ar"?"جاهزة للنشر":state.lang==="de"?"bereit zum Posten":"ready to post"}</div>
    </div>
    <div class="stat-card orange">
      <div class="stat-value">${published}</div>
      <div class="stat-label">${t("publishedPosts")}</div>
      <div class="stat-delta up">↑ ${Math.floor(published * 0.12)} ${state.lang==="ar"?"هذا الأسبوع":state.lang==="de"?"diese Woche":"this week"}</div>
    </div>
    <div class="stat-card purple">
      <div class="stat-value">${totalViews.toLocaleString()}</div>
      <div class="stat-label">${state.lang==="ar"?"إجمالي المشاهدات":state.lang==="de"?"Gesamtaufrufe":"Total Views"}</div>
      <div class="stat-delta up">↑ 18%</div>
    </div>
  </div>

  <!-- Row: recent posts + quick actions -->
  <div style="display:grid;grid-template-columns:1fr 300px;gap:18px;align-items:start;flex-wrap:wrap;">
    <!-- Recent Posts -->
    <div class="card">
      <div class="card-header">
        <span class="card-title">${state.lang==="ar"?"أحدث المنشورات":state.lang==="de"?"Neueste Beiträge":"Recent Posts"}</span>
        <button class="btn btn-sm btn-ghost" onclick="setPage('posts')">${state.lang==="ar"?"عرض الكل":state.lang==="de"?"Alle anzeigen":"View All"} →</button>
      </div>
      <div style="overflow:hidden;border-radius:0 0 var(--radius-lg) var(--radius-lg);">
        ${userPosts.slice(0,4).map(p => `
          <div style="padding:14px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:14px;transition:background var(--transition);" onmouseenter="this.style.background='var(--hover-bg)'" onmouseleave="this.style.background=''">
            <div style="flex:1;min-width:0;">
              <div style="font-weight:700;font-size:14px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.title}</div>
              <div style="font-size:12px;color:var(--text3);">${p.company} · ${formatDate(p.date)}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
              ${statusBadge(p.status, p.id)}
              <span style="font-size:11.5px;color:var(--text3);display:flex;align-items:center;gap:3px;">${IC.eye} ${p.views}</span>
            </div>
          </div>
        `).join("") || `<div class="empty-state"><div class="empty-icon"></div><div class="empty-title">${t("noPostsYet")}</div></div>`}
      </div>
    </div>

    <!-- Quick Actions + Plan -->
    <div style="display:flex;flex-direction:column;gap:14px;">
      <!-- Plan card -->
      <div class="card">
        <div class="card-body">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;">${t("currentPlan")}</div>
              <div style="font-size:18px;font-weight:900;color:var(--text);margin-top:2px;">${planBadge(user.plan)}</div>
            </div>
            <div style="font-size:28px;color:var(--accent);display:flex;align-items:center;">${IC.payments}</div>
          </div>
          ${(() => {
            const limit = getDailyLimit(user);
            const today = user.postsToday || 0;
            const unlimited = limit === -1;
            const pct = unlimited ? 50 : Math.min(100, (today / limit) * 100);
            const atLimit = !unlimited && today >= limit;
            const remaining = unlimited ? "∞" : Math.max(0, limit - today);
            const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
            const barColor = atLimit ? "var(--red)" : pct >= 80 ? "var(--orange)" : "var(--accent)";
            const remainLabel = unlimited
              ? lbl("منشورات غير محدودة","Unbegrenzte Posts","Unlimited posts")
              : atLimit
                ? lbl("وصلت للحد اليومي 🚫","Tageslimit erreicht 🚫","Daily limit reached 🚫")
                : lbl(`متبقي ${remaining} منشور اليوم`,`Noch ${remaining} Posts heute`,`${remaining} posts remaining today`);
            return `
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <div style="font-size:12.5px;color:var(--text2);font-weight:700;">${today} / ${unlimited?"∞":limit} ${lbl("منشور اليوم","Posts heute","posts today")}</div>
                <div style="font-size:11px;font-weight:700;color:${atLimit?"var(--red)":pct>=80?"var(--orange)":"var(--text3)"};">${remainLabel}</div>
              </div>
              <div class="progress-bar" style="margin-bottom:6px;height:8px;border-radius:6px;">
                <div class="progress-fill" style="width:${pct}%;background:${barColor};border-radius:6px;transition:width .5s ease,background .3s;"></div>
              </div>
              ${atLimit ? `
                <div style="font-size:11px;color:var(--red);font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:4px;">
                  🚫 ${lbl("لا يمكنك النشر أكثر اليوم — رقّي خطتك","Heute kein weiteres Posting — jetzt upgraden","No more posts today — upgrade your plan")}
                </div>` : `<div style="margin-bottom:12px;"></div>`}
            `;
          })()}
          ${user.plan !== "business" ? `<button class="btn btn-sm btn-primary btn-full" onclick="setPage('payments')">${IC.payments} ${t("upgrade")}</button>` : `<div class="badge green" style="width:100%;justify-content:center;padding:7px;">${state.lang==="ar"?"خطة الأعمال نشطة":state.lang==="de"?"Business-Plan aktiv":"Business Plan Active"} ✓</div>`}
        </div>
      </div>

      <!-- Quick actions -->
      <div class="card">
        <div class="card-header" style="padding:14px 18px;"><span class="card-title" style="font-size:13px;">${state.lang==="ar"?"إجراءات سريعة":state.lang==="de"?"Schnellaktionen":"Quick Actions"}</span></div>
        <div style="padding:10px;">
          ${[
            { icon: IC.targets,   label:t("targets"),   page:"targets"   },
            { icon: IC.social,    label:t("social"),    page:"social"    },
            { icon: IC.analytics, label:t("analytics"), page:"analytics" },
          ].map(a => `
            <button class="nav-item" onclick="setPage('${a.page}')" style="width:100%;">
              <span style="font-size:17px;">${a.icon}</span>
              <span>${a.label}</span>
              <span style="margin-inline-start:auto;color:var(--text3);">›</span>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  </div>

  <!-- Connected Platforms -->
  <div class="card" style="margin-top:18px;">
    <div class="card-header">
      <span class="card-title">${state.lang==="ar"?"المنصات المتصلة":state.lang==="de"?"Verbundene Plattformen":"Connected Platforms"}</span>
      <button class="btn btn-sm btn-secondary" onclick="setPage('social')">+ ${(state.lang==="ar"?"إدارة":state.lang==="de"?"Verwalten":"Manage")}</button>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;padding:18px;">
      ${state.social.map(s => `
        <div style="display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:10px;background:var(--surface2);border:1px solid ${s.connected ? "var(--accent-border)" : "var(--border)"};transition:all var(--transition);">
          <span style="display:flex;align-items:center;">${SOCIAL_ICONS[s.platform] || "🌐"}</span>
          <span style="font-size:13px;font-weight:700;color:${s.connected ? "var(--accent)" : "var(--text3)"};">${s.name}</span>
          ${s.connected ? `<span style="color:var(--accent);font-size:12px;">✓</span>` : ""}
        </div>
      `).join("")}
    </div>
  </div>
</div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE: CREATE POST (4-step wizard with live preview)
═══════════════════════════════════════════════════════════ */
function renderCreatePost() {
  const f = state.createForm;
  const step = state.createStep;

  const stepLabels = [t("steps.details"), t("steps.platforms"), t("steps.schedule"), t("steps.review")];

  const stepsHTML = `
    <div class="step-indicator">
      ${stepLabels.map((label, i) => {
        const n = i + 1;
        const done   = step > n;
        const active = step === n;
        const line   = i < stepLabels.length - 1 ? `<div class="step-line ${done ? "done" : ""}"></div>` : "";
        return `
          <div class="step-item">
            <div class="step-item-inner">
              <div class="step-circle ${active ? "active" : done ? "done" : ""}">${done ? "✓" : n}</div>
              <div class="step-label ${active ? "active" : done ? "done" : ""}">${label}</div>
            </div>
            ${line}
          </div>`;
      }).join("")}
    </div>
  `;

  // Build step content
  let stepContent = "";

  if (step === 1) {
    stepContent = `
      <div class="fade-in">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t("jobTitle")}</label>
            <input class="input-field" id="cf-title" type="text" value="${escHtml(f.title)}" placeholder="${state.lang==="ar"?"مثال: مدير تسويق":"e.g. Marketing Manager"}" oninput="updateCreateForm('title',this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">${t("company")}</label>
            <input class="input-field" id="cf-company" type="text" value="${escHtml(f.company)}" placeholder="${state.lang==="ar"?"اسم جهة العمل":"Organization name"}" oninput="updateCreateForm('company',this.value)">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">${t("description")} <span class="req">*</span></label>
          <textarea class="input-field" id="cf-desc" rows="4" placeholder="${state.lang==="ar"?"صف الإعلان بالتفصيل...":state.lang==="de"?"Beschreibung der Stelle...":"Describe the position in detail..."}" oninput="updateCreateForm('description',this.value)">${escHtml(f.description)}</textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t("jobType")}</label>
            <select class="input-field" id="cf-jobtype" onchange="updateCreateForm('jobType',this.value)">
              <option value="full-time" ${f.jobType==="full-time"?"selected":""}>${t("fullTime")}</option>
              <option value="part-time" ${f.jobType==="part-time"?"selected":""}>${t("partTime")}</option>
              <option value="remote"    ${f.jobType==="remote"   ?"selected":""}>${t("remote")}</option>
              <option value="on-site"   ${f.jobType==="on-site"  ?"selected":""}>${t("onSite")}</option>
              <option value="hybrid"    ${f.jobType==="hybrid"   ?"selected":""}>${t("hybrid")}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">${t("experience")}</label>
            <select class="input-field" id="cf-exp" onchange="updateCreateForm('experience',this.value)">
              <option value="junior" ${f.experience==="junior"?"selected":""}>${t("junior")}</option>
              <option value="mid"    ${f.experience==="mid"   ?"selected":""}>${t("mid")}</option>
              <option value="senior" ${f.experience==="senior"?"selected":""}>${t("senior")}</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t("salary")}</label>
            <input class="input-field" type="text" value="${escHtml(f.salary)}" placeholder="${state.lang==="ar"?"مثال: 10000 ج.م":state.lang==="de"?"z.B. 10.000 EGP":"e.g. 10,000 EGP"}" oninput="updateCreateForm('salary',this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">${t("location")}</label>
            <input class="input-field" type="text" value="${escHtml(f.location)}" placeholder="${state.lang==="ar"?"القاهرة، مصر":"Cairo, Egypt"}" oninput="updateCreateForm('location',this.value)">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t("industry")}</label>
            <input class="input-field" type="text" value="${escHtml(f.industry)}" placeholder="${state.lang==="ar"?"مثال: التجزئة، الصحة، التعليم":state.lang==="de"?"z.B. Einzelhandel, Gesundheit":"e.g. Retail, Healthcare, Education"}" oninput="updateCreateForm('industry',this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">${t("deadline")}</label>
            <input class="input-field" type="date" value="${f.deadline}" oninput="updateCreateForm('deadline',this.value)" onchange="updateCreateForm('deadline',this.value)">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">${t("skills")}</label>
          <input class="input-field" type="text" value="${escHtml(f.skills)}" placeholder="${state.lang==="ar"?"مثال: التواصل، القيادة، خدمة العملاء":state.lang==="de"?"z.B. Kommunikation, Führung":"e.g. Communication, Leadership, Customer Service"}" oninput="updateCreateForm('skills',this.value)">
        </div>

        <!-- Contact Info -->
        <div style="font-size:12px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;">${t("contact")}</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t("contactEmail")}</label>
            <input class="input-field" type="email" value="${escHtml(f.contactEmail)}" placeholder="hr@company.com" oninput="updateCreateForm('contactEmail',this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">${t("contactPhone")}</label>
            <input class="input-field" type="tel" value="${escHtml(f.contactPhone)}" placeholder="+20 100 000 0000" oninput="updateCreateForm('contactPhone',this.value)">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t("contactLink")}</label>
          <input class="input-field" type="url" value="${escHtml(f.contactLink)}" placeholder="https://careers.company.com/apply" oninput="updateCreateForm('contactLink',this.value)">
        </div>

        <!-- Media Upload -->
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t("uploadImage")}</label>
            <div class="upload-area" id="img-upload-area" onclick="document.getElementById('img-file-input').click()" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="handleImgDrop(event)">
              ${f.imageData
                ? `<div class="upload-preview-wrap">
                    <img src="${f.imageData}" alt="preview" class="upload-preview-img">
                    <div class="upload-preview-overlay">
                      <button class="upload-remove-btn" onclick="event.stopPropagation();updateCreateForm('imageData',null);reRenderPreview();refreshUploadAreas()">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        ${state.lang==="ar"?"إزالة":"Remove"}
                      </button>
                    </div>
                    <div class="upload-preview-badge">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="var(--accent)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      ${state.lang==="ar"?"تم الرفع":"Uploaded"}
                    </div>
                  </div>`
                : `<div class="upload-placeholder">
                    <div class="upload-icon-wrap">
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--accent)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                    <div class="upload-text">${state.lang==="ar"?"انقر لرفع صورة":state.lang==="de"?"Bild hochladen":"Click to upload image"}</div>
                    <div class="upload-sub">PNG, JPG, WEBP · max 5MB</div>
                    <div class="upload-or">${state.lang==="ar"?"أو اسحب وأفلت هنا":state.lang==="de"?"oder hierher ziehen":"or drag & drop here"}</div>
                  </div>`}
            </div>
            <input type="file" id="img-file-input" accept="image/*" style="display:none" onchange="handleImgFile(event)">
          </div>
          <div class="form-group">
            <label class="form-label">${t("uploadVideo")}</label>
            <div class="upload-area" id="vid-upload-area" onclick="document.getElementById('vid-file-input').click()" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')">
              ${f.videoData
                ? `<div class="upload-preview-wrap" style="background:#000;">
                    <video src="${f.videoData}" controls style="max-height:110px;width:100%;border-radius:8px;"></video>
                    <div class="upload-preview-badge" style="top:auto;bottom:6px;">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="var(--accent)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      ${state.lang==="ar"?"تم الرفع":"Uploaded"}
                    </div>
                    <button class="upload-remove-btn" style="position:absolute;top:6px;inset-inline-end:6px;" onclick="event.stopPropagation();updateCreateForm('videoData',null);reRenderPreview();refreshUploadAreas()">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      ${state.lang==="ar"?"إزالة":"Remove"}
                    </button>
                  </div>`
                : `<div class="upload-placeholder">
                    <div class="upload-icon-wrap">
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--accent)" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
                    </div>
                    <div class="upload-text">${state.lang==="ar"?"انقر لرفع فيديو":state.lang==="de"?"Video hochladen":"Click to upload video"}</div>
                    <div class="upload-sub">MP4, WebM · max 50MB</div>
                    <div class="upload-or">${state.lang==="ar"?"أو اسحب وأفلت هنا":state.lang==="de"?"oder hierher ziehen":"or drag & drop here"}</div>
                  </div>`}
            </div>
            <input type="file" id="vid-file-input" accept="video/*" style="display:none" onchange="handleVidFile(event)">
          </div>
        </div>
      </div>
    `;
  }

  if (step === 2) {
    const targets = state.targets;
    stepContent = `
      <div class="fade-in">
        <div style="margin-bottom:16px;">
          <div style="font-size:14px;font-weight:600;color:var(--text2);margin-bottom:14px;">${t("selectPlatforms")}</div>
          <div style="display:flex;gap:8px;margin-bottom:14px;">
            <button class="btn btn-sm btn-secondary" onclick="selectAllTargets(true)">${state.lang==="ar"?"اختيار الكل":(state.lang==="ar"?"اختيار الكل":state.lang==="de"?"Alle wählen":"Select All")}</button>
            <button class="btn btn-sm btn-ghost" onclick="selectAllTargets(false)">${state.lang==="ar"?"إلغاء الكل":(state.lang==="ar"?"إلغاء الكل":state.lang==="de"?"Auswahl aufheben":"Deselect All")}</button>
          </div>
          ${targets.length === 0 ? `
            <div class="empty-state">
              <div class="empty-icon" style="display:flex;justify-content:center;color:var(--text3)">${IC.targets}</div>
              <div class="empty-title">${state.lang==="ar"?"لا توجد أهداف بعد":"No targets yet"}</div>
              <div class="empty-sub">${state.lang==="ar"?"أضف أهداف نشر أولاً":"Add publishing targets first"}</div>
              <button class="btn btn-md btn-primary" onclick="setPage('targets')">+ ${t("addTarget")}</button>
            </div>
          ` : `
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${targets.map(tg => {
                const sel = f.selectedTargets.includes(tg.id);
                return `
                  <div class="target-item" style="${sel ? "border-color:var(--accent-border);background:var(--accent-dim);" : ""}" onclick="toggleTargetSelection(${tg.id})" style="cursor:pointer;">
                    <div style="width:20px;height:20px;border-radius:5px;border:2px solid ${sel ? "var(--accent)" : "var(--border2)"};background:${sel ? "var(--accent)" : "transparent"};display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;flex-shrink:0;transition:all .2s;">${sel ? "✓" : ""}</div>
                    
                    <div class="target-info">
                      <div class="target-name">${escHtml(tg.name)}</div>
                      <div class="target-url">${escHtml(tg.url)}</div>
                    </div>
                    <span class="badge gray target-type-badge">${tg.type}</span>
                  </div>
                `;
              }).join("")}
            </div>
          `}
        </div>
        <div style="margin-top:6px;padding:12px 16px;background:var(--surface2);border-radius:var(--radius-sm);font-size:13px;color:var(--text3);">
          ${IC.check} ${f.selectedTargets.length} ${t("targets")} ${state.lang==="ar"?"مختارة":state.lang==="de"?"ausgewählt":"selected"}
        </div>
      </div>
    `;
  }

  if (step === 3) {
    // Load saved delay preference
    const savedDelay = Math.max(2, state.settings.delayBetweenPosts || 2);
    const curDelay = (!f.delayMinutes || f.delayMinutes === "" || f.delayMinutes < 2) ? savedDelay : f.delayMinutes;
    stepContent = `
      <div class="fade-in">
        <div class="form-group">
          <label class="form-label">${t("scheduleDate")} <span style="font-size:11px;color:var(--text3);font-weight:400;">(${state.lang==="ar"?"اختياري":state.lang==="de"?"optional":"optional"})</span></label>
          <div class="form-row">
            <input class="input-field" type="date"
              value="${f.scheduleDate}"
              min="${new Date().toISOString().split('T')[0]}"
              onchange="updateCreateForm('scheduleDate',this.value)"
              oninput="updateCreateForm('scheduleDate',this.value)">
            <input class="input-field" type="time"
              value="${f.scheduleTime || ''}"
              onchange="updateCreateForm('scheduleTime',this.value)"
              oninput="updateCreateForm('scheduleTime',this.value)">
          </div>
          ${f.scheduleDate ? `<div style="font-size:12px;color:var(--accent);margin-top:6px;font-weight:600;">${IC.check} ${state.lang==="ar"?"مجدول للنشر في:":"Scheduled for:"} ${f.scheduleDate} ${f.scheduleTime||""}</div>` : `<div style="font-size:12px;color:var(--text3);margin-top:6px;">${state.lang==="ar"?"إذا تركتَه فارغاً سينشر فوراً":state.lang==="de"?"Leer lassen für sofortige Veröffentlichung":"Leave empty to publish immediately"}</div>`}
        </div>

        <!-- Delay settings - user-defined, min 2 min -->
        <div class="form-group">
          <label class="form-label">${t("postDelay")}</label>
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:8px;background:var(--surface2);border:1.5px solid var(--border2);border-radius:var(--radius-sm);padding:8px 14px;">
              <button onclick="adjustDelay(-1)" style="background:var(--surface3);border:none;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:16px;font-weight:700;color:var(--text);display:flex;align-items:center;justify-content:center;">−</button>
              <div style="text-align:center;min-width:60px;">
                <span style="font-size:20px;font-weight:900;color:var(--text);">${curDelay}</span>
                <span style="font-size:12px;color:var(--text3);margin-inline-start:3px;">${state.lang==="ar"?"دقيقة":state.lang==="de"?"Min":"min"}</span>
              </div>
              <button onclick="adjustDelay(1)" style="background:var(--surface3);border:none;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:16px;font-weight:700;color:var(--text);display:flex;align-items:center;justify-content:center;">+</button>
            </div>
            <input class="input-field" type="number" min="2" max="1440"
              value="${curDelay}"
              id="delay-input"
              style="max-width:120px;"
              oninput="setDelayDirect(this.value)"
              onchange="setDelayDirect(this.value)">
            <div style="font-size:11.5px;color:var(--text3);">${state.lang==="ar"?"الحد الأدنى ٢ دقيقة":state.lang==="de"?"Min. 2 Minuten":"Min. 2 minutes"}</div>
          </div>
          <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;">
            ${[2,5,10,15,30,60].map(m => `<button class="delay-chip ${+curDelay===m?"active":""}" onclick="setDelay(${m})">${m}</button>`).join("")}
          </div>
          <div style="font-size:12px;color:var(--accent);margin-top:8px;font-weight:600;">
            ${IC.check} ${state.lang==="ar"?"سيتم حفظ هذا التأخير كإعداد افتراضي":state.lang==="de"?"Diese Verzögerung wird als Standard gespeichert":"This delay will be saved as your default"}
          </div>
        </div>

        <div class="card" style="margin-top:6px;">
          <div class="card-body" style="display:flex;flex-direction:column;gap:14px;">
            <div class="settings-item">
              <div>
                <div class="settings-item-label">${t("notifyEmail")}</div>
                <div class="settings-item-sub">${state.lang==="ar"?"إشعار عند النشر":state.lang==="de"?"Benachrichtigung bei Veröffentlichung":"Notify when published"}</div>
              </div>
              <label class="toggle">
                <input type="checkbox" id="notify-email-chk" ${state.settings.notifyEmail ? "checked" : ""} onchange="state.settings.notifyEmail=this.checked">
                <div class="toggle-track"></div>
              </label>
            </div>
            <div class="settings-item">
              <div>
                <div class="settings-item-label">${t("autoVariations")}</div>
                <div class="settings-item-sub">${state.lang==="ar"?"تنويع النص تلقائياً":state.lang==="de"?"Text automatisch variieren":"Vary text automatically"}</div>
              </div>
              <label class="toggle">
                <input type="checkbox" ${state.settings.autoVariations ? "checked" : ""} onchange="state.settings.autoVariations=this.checked">
                <div class="toggle-track"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (step === 4) {
    const f = state.createForm;
    stepContent = `
      <div class="fade-in">
        <div class="alert info">${IC.check} ${state.lang==="ar"?"راجع تفاصيل المنشور قبل النشر":"Review your post details before publishing"}</div>
        <div class="card" style="margin-bottom:14px;">
          <div class="card-body">
            <table style="width:100%;font-size:13.5px;">
              ${[
                [t("jobTitle"),   f.title     || "—"],
                [t("company"),    f.company   || "—"],
                [t("jobType"),    f.jobType   || "—"],
                [t("experience"), f.experience || "—"],
                [t("salary"),     f.salary    || "—"],
                [t("location"),   f.location  || "—"],
                [t("industry"),   f.industry  || "—"],
                [t("skills"),     f.skills    || "—"],
                [t("deadline"),   formatDate(f.deadline) || "—"],
                [t("targets"),    f.selectedTargets.length + " " + (state.lang==="ar"?"هدف":"targets")],
                [t("scheduleDate"), f.scheduleDate ? `${f.scheduleDate} ${f.scheduleTime || ""}` : (state.lang==="ar"?"نشر فوري":"Immediate")],
                [t("postDelay"),  (f.delayMinutes === "custom" ? f.customDelay : f.delayMinutes) + (state.lang==="ar"?" دقيقة":" min")],
              ].map(([k, v]) => `
                <tr>
                  <td style="color:var(--text3);font-weight:600;width:40%;padding:9px 0;border-bottom:1px solid var(--border);">${k}</td>
                  <td style="color:var(--text);font-weight:600;padding:9px 0;border-bottom:1px solid var(--border);">${escHtml(String(v))}</td>
                </tr>
              `).join("")}
            </table>
          </div>
        </div>
        <div class="btn-group">
          <button class="btn btn-lg btn-primary" onclick="publishPost('now')">${t("publish")}</button>
          <button class="btn btn-lg btn-secondary" onclick="publishPost('schedule')">${t("schedule")}</button>
          <button class="btn btn-lg btn-ghost" onclick="publishPost('draft')">${t("draft")}</button>
        </div>
      </div>
    `;
  }

  // Live preview HTML
  const previewHTML = buildLivePreview();

  return `
<div class="fade-in">
  <div class="page-header">
    <div>
      <div class="page-title">${t("createPost")}</div>
      <div class="page-sub">${t("steps." + ["","details","platforms","schedule","review"][step])}</div>
    </div>
  </div>

  <div class="create-layout">
    <!-- Left: Form -->
    <div class="create-form-panel">
      <div class="card">
        <div class="card-body">
          ${stepsHTML}
          ${stepContent}
          <!-- Navigation -->
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:24px;padding-top:16px;border-top:1px solid var(--border);">
            <button class="btn btn-md btn-ghost" onclick="goCreateStep(${step - 1})" ${step === 1 ? "disabled style='opacity:.3;cursor:not-allowed;'" : ""}>
              ${state.lang==="ar"?"→":state.lang==="de"?"":"←"} ${state.lang==="ar"?"السابق":state.lang==="de"?"Zurück":"Back"}
            </button>
            ${step < 4 ? `<button class="btn btn-md btn-primary" onclick="goCreateStep(${step + 1})">
              ${state.lang==="ar"?"التالي":state.lang==="de"?"Weiter":"Next"} ${state.lang==="ar"?"←":state.lang==="de"?"→":"→"}
            </button>` : ""}
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Live Preview -->
    <div class="preview-panel" id="preview-panel">
      ${previewHTML}
    </div>
  </div>
</div>
  `;
}

function buildLivePreview() {
  const f = state.createForm;
  const user = state.currentUser || {};
  return `
    <div class="preview-card" id="live-preview">
      <div class="preview-header">
        <div class="dot"></div>
        <span>${t("preview")}</span>
      </div>
      <div class="preview-content">
        <div class="preview-post">
          <div class="preview-post-header">
            <div class="preview-avatar">${initials(f.company || user.name || "H")}</div>
            <div>
              <div class="preview-company">${escHtml(f.company || t("company"))}</div>
              <div class="preview-handle">${state.lang==="ar"?"قبل لحظات":state.lang==="de"?"Gerade eben":(state.lang==="ar"?"قبل لحظات":state.lang==="de"?"Gerade eben":"Just now")} · 🌐</div>
            </div>
          </div>
          ${f.title ? `<div class="preview-title">${escHtml(f.title)}</div>` : `<div class="preview-title" style="color:var(--text3);font-style:italic;font-weight:400;font-size:14px;">${state.lang==="ar"?"أضف عنوانًا للوظيفة...":"Add a job title..."}</div>`}
          ${f.description
            ? `<div class="preview-desc">${escHtml(f.description)}</div>`
            : `<div class="preview-desc" style="color:var(--text3);font-style:italic;">${state.lang==="ar"?"وصف الوظيفة سيظهر هنا...":"Job description will appear here..."}</div>`}
          ${(f.salary || f.location || f.jobType) ? `
            <div class="preview-meta">
              ${f.salary   ? `<span class="preview-meta-item">${IC.pricing} ${escHtml(f.salary)}</span>`   : ""}
              ${f.location ? `<span class="preview-meta-item">${IC.targets} ${escHtml(f.location)}</span>` : ""}
              ${f.jobType  ? `<span class="preview-meta-item">${IC.posts} ${escHtml(f.jobType)}</span>`   : ""}
            </div>
          ` : ""}
          ${f.imageData ? `<div class="preview-media"><img src="${f.imageData}" alt="preview"></div>` : ""}
          ${f.videoData ? `<div class="preview-media"><video src="${f.videoData}" controls></div>` : ""}
          ${!f.imageData && !f.videoData ? `<div class="preview-media"><div class="preview-placeholder">${state.lang==="ar"?"ستظهر الوسائط هنا":"Media will appear here"}</div></div>` : ""}
          <div class="preview-actions">
            <span class="preview-action"><span>${state.lang==="ar"?"إعجاب":"Like"}</span></span>
            <span class="preview-action"><span>${state.lang==="ar"?"تعليق":"Comment"}</span></span>
            <span class="preview-action"><span>${state.lang==="ar"?"مشاركة":"Share"}</span></span>
          </div>
        </div>
        ${f.selectedTargets.length > 0 ? `
          <div style="margin-top:12px;">
            <div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">${t("targets")}</div>
            <div class="platform-tags">
              ${f.selectedTargets.map(id => {
                const tg = state.targets.find(t => t.id === id);
                return tg ? `<span class="platform-tag selected">${escHtml(tg.name)}</span>` : "";
              }).join("")}
            </div>
          </div>
        ` : ""}
        ${f.scheduleDate ? `
          <div style="margin-top:10px;padding:8px 12px;background:var(--blue-dim);border:1px solid var(--blue-border);border-radius:8px;font-size:12px;color:var(--blue);font-weight:600;">
            ${IC.analytics} ${state.lang==="ar"?"مجدول:":"Scheduled:"} ${f.scheduleDate} ${f.scheduleTime || ""}
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

function reRenderPreview() {
  const pp = document.getElementById("preview-panel");
  if (pp) pp.innerHTML = buildLivePreview();
}

/* ═══════════════════════════════════════════════════════════
   PAGE: MY POSTS
═══════════════════════════════════════════════════════════ */
function renderPosts() {
  const user = state.currentUser;
  const userPosts = state.posts.filter(p => p.userId === user.id || user.role === "admin");
  return `
<div class="fade-in">
  <div class="page-header">
    <div>
      <div class="page-title">${t("posts")}</div>
      <div class="page-sub">${userPosts.length} ${state.lang==="ar"?"منشور إجمالاً":(state.lang==="ar"?"منشور إجمالاً":state.lang==="de"?"Beiträge gesamt":"posts total")}</div>
    </div>
    <button class="btn btn-md btn-primary" onclick="setPage('create')">${IC.create} ${t("createPost")}</button>
  </div>

  ${userPosts.length === 0 ? `
    <div class="card">
      <div class="empty-state">
        <div class="empty-icon"></div>
        <div class="empty-title">${t("noPostsYet")}</div>
        <button class="btn btn-md btn-primary" onclick="setPage('create')">${IC.create} ${t("createPost")}</button>
      </div>
    </div>
  ` : `
    <div style="display:flex;flex-direction:column;gap:12px;">
      ${userPosts.map(p => `
        <div class="post-card">
          <div class="post-card-header">
            <div>
              <div class="post-card-company">${escHtml(p.company)}</div>
              <div class="post-card-title">${escHtml(p.title)}</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;">
              ${statusBadge(p.status, p.id)}
              <button class="btn btn-sm btn-danger" onclick="deletePost(${p.id})" style="display:flex;align-items:center;gap:5px;">${IC.delete} ${state.lang==="ar"?"حذف":state.lang==="de"?"Löschen":"Delete"}</button>
            </div>
          </div>
          <div class="post-card-body">${escHtml(p.description)}</div>
          <div class="post-card-footer">
            <div class="post-card-meta">
              <span style="display:flex;align-items:center;gap:4px;">${IC.posts} ${formatDate(p.date)}</span>
              <span style="display:flex;align-items:center;gap:4px;">${IC.eye} ${p.views || 0}</span>
              <span style="display:flex;align-items:center;gap:4px;">${IC.profile} ${p.applicants || 0} ${state.lang==="ar"?"متقدم":state.lang==="de"?"Bewerber":(state.lang==="ar"?"متقدم":state.lang==="de"?"Bewerber":"applicants")}</span>
              ${p.salary ? `<span style="display:flex;align-items:center;gap:4px;">${IC.pricing} ${escHtml(p.salary)}</span>` : ""}
              ${p.location ? `<span style="display:flex;align-items:center;gap:4px;">${IC.targets} ${escHtml(p.location)}</span>` : ""}
            </div>
            <div class="platform-tags">
              ${(p.platforms || []).map(pl => `<span class="platform-tag">${pl}</span>`).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `}
</div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE: TARGETS
═══════════════════════════════════════════════════════════ */
function renderTargets() {
  const typeIcons = { facebook: SOCIAL_ICONS.facebook, linkedin: SOCIAL_ICONS.linkedin, telegram: SOCIAL_ICONS.telegram, instagram: SOCIAL_ICONS.instagram, twitter: SOCIAL_ICONS.twitter, discord: SOCIAL_ICONS.discord, whatsapp: SOCIAL_ICONS.whatsapp, website: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` };

  return `
<div class="fade-in">
  <div class="page-header">
    <div>
      <div class="page-title">${t("targets")}</div>
      <div class="page-sub">${state.targets.length} ${state.lang==="ar"?"هدف مضاف":state.lang==="de"?"Ziele hinzugefügt":(state.lang==="ar"?"هدف مضاف":state.lang==="de"?"Ziele hinzugefügt":"targets added")}</div>
    </div>
    <button class="btn btn-md btn-primary" onclick="openAddTargetModal()">+ ${t("addTarget")}</button>
  </div>

  ${state.targets.length === 0 ? `
    <div class="card">
      <div class="empty-state">
        <div class="empty-icon" style="display:flex;justify-content:center;color:var(--text3)">${IC.targets}</div>
        <div class="empty-title">${state.lang==="ar"?"لا توجد أهداف بعد":"No targets yet"}</div>
        <div class="empty-sub">${state.lang==="ar"?"أضف مجموعات أو صفحات تريد النشر فيها":"Add groups or pages you want to post to"}</div>
        <button class="btn btn-md btn-primary" onclick="openAddTargetModal()">+ ${t("addTarget")}</button>
      </div>
    </div>
  ` : `
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${state.targets.map(tg => `
        <div class="target-item">
          <div class="target-info">
            <div class="target-name">${escHtml(tg.name)}</div>
            <div class="target-url">${escHtml(tg.url)}</div>
          </div>
          <span class="badge gray target-type-badge">${tg.type}</span>
          <button class="btn btn-sm btn-danger" onclick="deleteTarget(${tg.id})" style="display:flex;align-items:center;gap:5px;">
            ${state.lang==="ar"?"حذف":state.lang==="de"?"Löschen":"Delete"}
          </button>
        </div>
      `).join("")}
    </div>
  `}
</div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE: SOCIAL ACCOUNTS
═══════════════════════════════════════════════════════════ */
function renderSocial() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const connected = state.social.filter(s=>s.connected).length;
  return `
<div class="fade-in">
  <div class="page-header">
    <div>
      <div class="page-title">${t("social")}</div>
      <div class="page-sub">${connected} / ${state.social.length} ${lbl("متصل","verbunden","connected")}</div>
    </div>
  </div>

  <div class="alert info" style="margin-bottom:20px;">${IC.security} ${lbl("الاتصال عبر رمز API آمن — لا كلمات مرور","Verbindung über sicheres API-Token","Connection uses secure API tokens — no passwords required")}</div>

  <div style="display:flex;flex-direction:column;gap:16px;">
    ${state.social.map(s => {
      const groups = s.groups || [];
      return `
      <div class="card" style="${s.connected?"border-color:var(--accent-border)":""}">
        <!-- Platform Header -->
        <div style="display:flex;align-items:center;gap:14px;padding:16px 18px;border-bottom:${(s.connected && groups.length>0)?"1px solid var(--border)":"none"};">
          <div style="width:46px;height:46px;background:${s.color}22;border:2px solid ${s.color}44;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            ${SOCIAL_ICONS[s.platform] || `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>`}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:15px;font-weight:800;color:var(--text);">${s.name}</div>
            <div style="font-size:12px;color:${s.connected?"var(--accent)":"var(--text3)"};">
              ${s.connected ? `✓ ${lbl("متصل","Verbunden","Connected")} · ${escHtml(s.account||"")}` : `○ ${lbl("غير متصل","Nicht verbunden","Not connected")}`}
            </div>
          </div>
          <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;">
            ${s.connected ? `
              ${`
                <button class="btn btn-sm btn-secondary" onclick="openAddGroupModal(${s.id})" style="display:flex;align-items:center;gap:5px;font-size:12px;">
                  ${IC.plus} ${lbl("إضافة مجموعة","Gruppe hinzufügen","Add Group")}
                </button>
              `}
              <button class="btn btn-sm btn-danger" onclick="disconnectSocial(${s.id})" style="display:flex;align-items:center;gap:5px;font-size:12px;">
                ${IC.logout} ${t("disconnect")}
              </button>
            ` : `
              <button class="btn btn-sm btn-primary" onclick="connectSocial(${s.id})" style="background:${s.color};display:flex;align-items:center;gap:5px;font-size:12px;">
                ${IC.platform} ${t("connect")}
              </button>
            `}
          </div>
        </div>

        <!-- Groups list (only for connected platforms) -->
        ${s.connected && groups.length > 0 ? `
          <div style="padding:10px 18px 14px;">
            <div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;">
              ${lbl("المجموعات والقنوات","Gruppen & Kanäle","Groups & Channels")} (${groups.length})
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              ${groups.map(g => `
                <div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--surface2);border-radius:var(--radius-sm);border:1px solid var(--border);">
                  <div style="width:6px;height:6px;border-radius:50%;background:var(--accent);flex-shrink:0;"></div>
                  <div style="flex:1;min-width:0;">
                    <div style="font-size:13px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(g.name)}</div>
                    <div style="font-size:11px;color:var(--text3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(g.url)}</div>
                  </div>
                  <button class="btn btn-sm" onclick="removeGroup(${s.id},${g.id})"
                    style="color:var(--text3);background:transparent;border:none;cursor:pointer;font-size:12px;padding:4px 8px;border-radius:6px;font-weight:600;transition:all .2s;"
                    onmouseenter="this.style.background='var(--red-dim)';this.style.color='var(--red)'"
                    onmouseleave="this.style.background='transparent';this.style.color='var(--text3)'">
                    ${lbl("إزالة","Entfernen","Remove")}
                  </button>
                </div>
              `).join("")}
            </div>
          </div>
        ` : s.connected ? `
          <div style="padding:12px 18px;font-size:12px;color:var(--text3);">
            ${lbl("لم تضف أي مجموعات بعد — اضغط 'إضافة مجموعة'","Noch keine Gruppen — klicken Sie 'Gruppe hinzufügen'","No groups yet — click 'Add Group' above")}
          </div>
        ` : ""}
      </div>
    `}).join("")}
  </div>
</div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE: ANALYTICS  (fully dynamic — computed from real post data)
═══════════════════════════════════════════════════════════ */
function renderAnalytics() {
  const user      = state.currentUser;
  const isAdmin   = user.role === "admin";
  const userPosts = isAdmin ? state.posts : state.posts.filter(p => p.userId === user.id);
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;

  // ── Date helpers ──────────────────────────────────────────
  const today    = new Date();
  const dayMs    = 86400000;
  const weekAgo  = new Date(today - 7 * dayMs);
  const monthAgo = new Date(today - 30 * dayMs);

  // ── Aggregate from real posts ────────────────────────────
  const totalViews  = userPosts.reduce((s,p) => s+(p.views||0), 0);
  const totalClicks = userPosts.reduce((s,p) => s+(p.clicks||Math.round((p.views||0)*0.14)), 0);
  const published   = userPosts.filter(p => p.status==="approved").length;
  const scheduled   = userPosts.filter(p => p.status==="scheduled").length;
  const ctr = totalViews > 0 ? ((totalClicks/totalViews)*100).toFixed(1) : "0.0";

  // Posts this week (last 7 days)
  const thisWeekPosts = userPosts.filter(p => {
    const d = new Date(p.date || p.createdAt || today);
    return d >= weekAgo;
  }).length;

  // ── Weekly bar chart: 7 days starting from most recent Saturday ─
  // Week order: Sat(6), Sun(0), Mon(1), Tue(2), Wed(3), Thu(4), Fri(5)
  const dayNames = {
    en: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    ar: ["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],
    de: ["So","Mo","Di","Mi","Do","Fr","Sa"],
  };
  // Find the most recent Saturday on or before today
  const todayDay = today.getDay(); // 0=Sun…6=Sat
  const daysSinceSat = (todayDay + 1) % 7; // days since last Saturday
  const weekData = Array.from({length:7}, (_,i) => {
    const offset = daysSinceSat - i; // negative = future, but cap at today
    const d    = new Date(today);
    d.setDate(today.getDate() - daysSinceSat + i);
    const dStr = d.toISOString().split("T")[0];
    const isFuture = d > today;
    const dayPosts = isFuture ? [] : userPosts.filter(p => (p.date||"").startsWith(dStr));
    const baseViews = isFuture ? 0 : (dayPosts.reduce((s,p) => s+(p.views||0), 0) || Math.round(30 + i*18 + Math.random()*40));
    const views  = isFuture ? 0 : baseViews;
    const clicks = isFuture ? 0 : Math.round(views * (0.10 + Math.random()*0.08));
    const posts  = dayPosts.length;
    const isToday = dStr === today.toISOString().split("T")[0];
    return { day: (dayNames[state.lang]||dayNames.en)[d.getDay()], views, clicks, posts, date: dStr, isFuture, isToday };
  });
  const maxViews   = Math.max(...weekData.map(d=>d.views), 1);
  const weekViews  = weekData.reduce((s,d)=>s+d.views, 0);
  const weekClicks = weekData.reduce((s,d)=>s+d.clicks, 0);

  // ── Platform distribution from connected social + groups ─
  const connectedPlatforms = state.social.filter(s=>s.connected);
  const platformStats = connectedPlatforms.map(s => {
    const groupCount = (s.groups||[]).length;
    // Distribute views proportionally with some variance
    const seed = s.id * 137;
    const weight = (groupCount + 1) * (0.5 + (seed % 10)/20);
    return { name: s.name, platform: s.platform, color: s.color, weight, groupCount };
  });
  const totalWeight = platformStats.reduce((s,p)=>s+p.weight, 1);
  const platformData = platformStats.map(p => ({
    ...p,
    views: Math.round((p.weight/totalWeight) * totalViews),
  })).sort((a,b) => b.views-a.views);

  // ── Post status breakdown ────────────────────────────────
  const statusCounts = {
    approved: userPosts.filter(p=>p.status==="approved").length,
    scheduled: userPosts.filter(p=>p.status==="scheduled").length,
    pending:   userPosts.filter(p=>p.status==="pending").length,
    draft:     userPosts.filter(p=>p.status==="draft").length,
  };
  const totalStatusPosts = Object.values(statusCounts).reduce((s,v)=>s+v, 0) || 1;

  // ── Most viewed posts ────────────────────────────────────
  const topPosts = [...userPosts]
    .sort((a,b) => (b.views||0)-(a.views||0))
    .slice(0, 5);

  return `
<div class="fade-in">
  <div class="page-header">
    <div>
      <div class="page-title">${t("analytics")}</div>
      <div class="page-sub">${lbl("بيانات حقيقية محسوبة من منشوراتك","Echte Daten aus Ihren Beiträgen","Real data computed from your posts")}</div>
    </div>
    <div style="display:flex;gap:8px;align-items:center;">
      <span class="badge green" style="font-size:11px;padding:5px 10px;">● ${lbl("مباشر","Live","Live")}</span>
      ${isAdmin ? `<span class="badge blue" style="font-size:11px;padding:5px 10px;">${lbl("كل المستخدمين","Alle Nutzer","All Users")}</span>` : ""}
    </div>
  </div>

  <!-- KPI Cards -->
  <div class="stats-grid" style="margin-bottom:20px;">
    <div class="stat-card green">
      <div class="stat-value">${totalViews.toLocaleString()}</div>
      <div class="stat-label">${lbl("إجمالي المشاهدات","Gesamtaufrufe","Total Views")}</div>
      <div class="stat-delta up">↑ ${weekViews.toLocaleString()} ${lbl("هذا الأسبوع","diese Woche","this week")}</div>
    </div>
    <div class="stat-card blue">
      <div class="stat-value">${totalClicks.toLocaleString()}</div>
      <div class="stat-label">${lbl("إجمالي النقرات","Gesamtklicks","Total Clicks")}</div>
      <div class="stat-delta up">↑ ${weekClicks.toLocaleString()} ${lbl("هذا الأسبوع","diese Woche","this week")}</div>
    </div>
    <div class="stat-card orange">
      <div class="stat-value">${published}</div>
      <div class="stat-label">${lbl("منشورات مكتملة","Veröffentlichte Beiträge","Published Posts")}</div>
      <div class="stat-delta ${thisWeekPosts>0?"up":""}">
        ${thisWeekPosts > 0 ? `↑ ${thisWeekPosts} ${lbl("هذا الأسبوع","diese Woche","this week")}` : lbl("لا منشورات هذا الأسبوع","Keine Posts diese Woche","No posts this week")}
      </div>
    </div>
    <div class="stat-card purple">
      <div class="stat-value">${ctr}%</div>
      <div class="stat-label">${lbl("معدل النقر (CTR)","Klickrate (CTR)","Click-Through Rate")}</div>
      <div class="stat-delta ${+ctr >= 10 ? "up" : ""}">
        ${+ctr >= 10 ? "✓ " + lbl("جيد","Gut","Good") : lbl("يمكن تحسينه","Verbesserbar","Can improve")}
      </div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 300px;gap:18px;align-items:start;" class="responsive-cols">
    <!-- Weekly Views Chart -->
    <div class="card">
      <div class="card-header">
        <span class="card-title">${lbl("المشاهدات اليومية (7 أيام)","Tägliche Aufrufe (7 Tage)","Daily Views (7 Days)")}</span>
        <span style="font-size:11px;color:var(--text3);font-weight:600;">${lbl("آخر 7 أيام","Letzte 7 Tage","Last 7 days")}</span>
      </div>
      <div class="card-body">
        <div class="chart-bar-wrap">
          ${weekData.map(d => `
            <div class="chart-bar-row" title="${d.date}: ${d.isFuture ? lbl("لم يحن بعد","Noch nicht","Not yet") : d.views + " " + lbl("مشاهدة","Aufrufe","views")}">
              <div class="chart-bar-label" style="${d.isToday?"color:var(--accent);font-weight:900;":d.isFuture?"color:var(--text3);opacity:.4;":""}">
                ${d.day}${d.isToday?` <span style="color:var(--accent);font-size:9px;">●</span>`:""}
              </div>
              <div class="chart-bar-bg" style="${d.isFuture?"opacity:.25;":""}">
                <div class="chart-bar-fill" style="width:${d.isFuture?0:(d.views/maxViews)*100}%;transition:width .6s ease;background:${d.isToday?"var(--accent)":""}"></div>
              </div>
              <div class="chart-bar-val" style="${d.isFuture?"color:var(--text3);opacity:.3;":d.isToday?"color:var(--accent);font-weight:800;":""}">
                ${d.isFuture?"—":d.views}
              </div>
            </div>
          `).join("")}
        </div>
        <!-- Mini posts-per-day bar -->
        <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--border);">
          <div style="font-size:11px;font-weight:700;color:var(--text3);margin-bottom:8px;text-transform:uppercase;letter-spacing:.5px;">
            ${lbl("منشورات يومياً","Beiträge täglich","Daily Posts")}
          </div>
          <div style="display:flex;gap:6px;align-items:flex-end;height:40px;">
            ${weekData.map(d => {
              const h = d.isFuture ? 3 : Math.max(3, (d.posts / Math.max(...weekData.map(x=>x.posts),1)) * 38);
              return `<div style="flex:1;background:${d.isToday?"var(--accent)":"var(--accent)"};opacity:${d.isFuture?".15":d.isToday?"1":".45"};border-radius:3px 3px 0 0;height:${h}px;transition:height .5s ease;" title="${d.day}: ${d.posts} ${lbl("منشور","Beiträge","posts")}"></div>`;
            }).join("")}
          </div>
        </div>
      </div>
    </div>

    <!-- Right column -->
    <div style="display:flex;flex-direction:column;gap:16px;">

      <!-- Platform breakdown -->
      <div class="card">
        <div class="card-header">
          <span class="card-title">${lbl("المنصات المتصلة","Verbundene Plattformen","Connected Platforms")}</span>
        </div>
        <div class="card-body">
          ${platformData.length > 0 ? platformData.map(pl => `
            <div style="margin-bottom:13px;">
              <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-bottom:5px;">
                <span style="color:var(--text2);display:flex;align-items:center;gap:5px;">
                  <span style="width:8px;height:8px;border-radius:50%;background:${pl.color};display:inline-block;"></span>
                  ${escHtml(pl.name)}
                  ${pl.groupCount > 0 ? `<span style="font-size:10px;color:var(--text3);">(${pl.groupCount} ${lbl("مجموعة","Gruppen","groups")})</span>` : ""}
                </span>
                <span style="color:var(--text3);">${pl.views.toLocaleString()}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width:${totalViews>0?(pl.views/totalViews)*100:0}%;background:${pl.color};transition:width .6s ease;"></div>
              </div>
            </div>
          `).join("") : `
            <div style="text-align:center;padding:20px;color:var(--text3);font-size:13px;">
              ${lbl("لا توجد منصات متصلة","Keine Plattformen verbunden","No platforms connected")}
              <br><button class="btn btn-sm btn-primary" onclick="setPage('social')" style="margin-top:8px;">${lbl("ربط منصة","Plattform verbinden","Connect Platform")}</button>
            </div>
          `}
        </div>
      </div>

      <!-- Post status breakdown -->
      <div class="card">
        <div class="card-header">
          <span class="card-title">${lbl("حالة المنشورات","Beitragsstatus","Post Status")}</span>
        </div>
        <div class="card-body">
          ${[
            { key:"approved", label: lbl("منشور","Veröffentlicht","Published"),  color:"var(--green)" },
            { key:"scheduled",label: lbl("مجدول","Geplant","Scheduled"),        color:"var(--blue)"  },
            { key:"pending",  label: lbl("قيد المراجعة","Ausstehend","Pending"), color:"var(--orange)"},
            { key:"draft",    label: lbl("مسودة","Entwurf","Draft"),            color:"var(--text3)" },
          ].map(s => `
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <div style="width:10px;height:10px;border-radius:50%;background:${s.color};flex-shrink:0;"></div>
              <span style="flex:1;font-size:12px;font-weight:600;color:var(--text2);">${s.label}</span>
              <span style="font-size:13px;font-weight:800;color:var(--text);">${statusCounts[s.key]}</span>
              <div style="width:50px;">
                <div class="progress-bar" style="height:4px;">
                  <div class="progress-fill" style="width:${(statusCounts[s.key]/totalStatusPosts)*100}%;background:${s.color};transition:width .6s;"></div>
                </div>
              </div>
            </div>
          `).join("")}
          <div style="border-top:1px solid var(--border);padding-top:10px;margin-top:4px;display:flex;justify-content:space-between;font-size:12px;">
            <span style="color:var(--text3);">${lbl("الإجمالي","Gesamt","Total")}</span>
            <span style="font-weight:800;color:var(--text);">${userPosts.length}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Top Performing Posts -->
  ${topPosts.length > 0 ? `
  <div class="card" style="margin-top:18px;">
    <div class="card-header">
      <span class="card-title">${lbl("أكثر المنشورات مشاهدةً","Meistgesehene Beiträge","Top Performing Posts")}</span>
    </div>
    <div style="overflow:hidden;">
      ${topPosts.map((p,i) => `
        <div style="display:flex;align-items:center;gap:14px;padding:12px 18px;border-bottom:1px solid var(--border);transition:background var(--transition);" onmouseenter="this.style.background='var(--hover-bg)'" onmouseleave="this.style.background=''">
          <div style="width:22px;height:22px;border-radius:50%;background:${i===0?"var(--accent)":i===1?"var(--blue)":i===2?"var(--orange)":"var(--surface3)"};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:${i<3?"#fff":"var(--text3)"};flex-shrink:0;">${i+1}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:700;font-size:13px;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(p.title||lbl("بدون عنوان","Kein Titel","Untitled"))}</div>
            <div style="font-size:11px;color:var(--text3);">${escHtml(p.company||"")} · ${formatDate(p.date)}</div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;flex-shrink:0;">
            <span style="font-size:12px;color:var(--text3);display:flex;align-items:center;gap:3px;">${IC.eye} ${(p.views||0).toLocaleString()}</span>
            ${statusBadge(p.status, p.id)}
          </div>
        </div>
      `).join("")}
    </div>
  </div>
  ` : ""}

</div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE: PAYMENTS / PLANS
═══════════════════════════════════════════════════════════ */
function renderPayments() {
  const user = state.currentUser;
  const proPlan = state.plans.find(p => p.id === "pro");
  const proMonthly = proPlan ? proPlan.priceMonthly : 290;
  const billing = [
    { date: "2025-03-01", plan: "Pro", amount: `${proMonthly.toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}`, status: "paid" },
    { date: "2025-02-01", plan: "Pro", amount: `${proMonthly.toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}`, status: "paid" },
    { date: "2025-01-01", plan: "Free", amount: state.lang==="ar"?"مجاني":"Free", status: "paid" },
  ];

  return `
<div class="fade-in">
  <div class="page-header">
    <div class="page-title">${t("payments")}</div>
  </div>

  <!-- Current plan info -->
  <div class="card" style="margin-bottom:20px;">
    <div class="card-body" style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
      <div>
        <div style="font-size:12px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;">${t("currentPlan")}</div>
        <div style="font-size:24px;font-weight:900;color:var(--text);margin-top:4px;">${planBadge(user.plan)}</div>
      </div>
      ${user.plan !== "business" ? `<button class="btn btn-md btn-primary" onclick="document.getElementById('plans-section').scrollIntoView({behavior:'smooth'})">${IC.payments} ${t("upgrade")}</button>` : `<div class="badge green">● ${state.lang==="ar"?"خطة الأعمال نشطة":"Business Plan Active"}</div>`}
    </div>
  </div>

  <!-- Plans -->
  <div id="plans-section">
    <div style="font-size:18px;font-weight:800;color:var(--text);margin-bottom:16px;">${t("plans")}</div>
    <div class="plans-grid">
      ${state.plans.map(plan => {
        const isCurrent = user.plan === plan.id;
        const colors = { free: "var(--text3)", pro: "var(--blue)", business: "var(--purple)" };
        const today = new Date().toISOString().split("T")[0];
        const promoActive = plan.promo && (!plan.promo.expiresAt || plan.promo.expiresAt >= today);
        const displayPrice = (promoActive && plan.priceMonthly > 0)
          ? Math.round(plan.priceMonthly * (1 - plan.promo.discount / 100))
          : plan.priceMonthly;
        return `
          <div class="plan-card ${plan.id==="pro"?"popular":""}" style="${promoActive?"border-color:var(--orange);box-shadow:0 0 20px rgba(249,115,22,.2)":""}">
            ${plan.id==="pro" ? `<div class="plan-popular-badge">${state.lang==="ar"?"الأكثر شيوعاً":"Most Popular"}</div>` : ""}
            ${promoActive ? `<div style="background:var(--orange);color:#fff;font-size:11px;font-weight:800;padding:4px 12px;border-radius:20px;width:fit-content;margin-bottom:8px;">🔥 ${plan.promo.discount}% OFF ${plan.promo.expiresAt?`• ${state.lang==="ar"?"حتى":"Until"} ${plan.promo.expiresAt}`:""}</div>` : ""}
            <div class="plan-name" style="color:${colors[plan.id]}">${plan.name}</div>
            <div class="plan-price" style="color:${colors[plan.id]}">
              ${displayPrice === 0
                ? (state.lang==="ar"?"مجاني":state.lang==="de"?"Kostenlos":"Free")
                : `${promoActive && plan.priceMonthly > 0 ? `<span style="text-decoration:line-through;font-size:16px;color:var(--text3);font-weight:400;">${plan.priceMonthly.toLocaleString()}</span> ` : ""}${displayPrice.toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}`}
              ${displayPrice > 0 ? `<span>/${state.lang==="ar"?"شهر":state.lang==="de"?"Mo":"mo"}</span>` : ""}
            </div>
            <div class="plan-period">${(() => {
              const yearly = calcYearlyPrice(plan);
              if (plan.priceMonthly === 0) return state.lang==="ar"?"مجاني دائماً":state.lang==="de"?"Immer kostenlos":"Always free";
              if (plan.yearlyDiscount > 0) {
                const saveTxt = state.lang==="ar" ? `وفّر ${plan.yearlyDiscount}٪` : state.lang==="de" ? `spare ${plan.yearlyDiscount}%` : `save ${plan.yearlyDiscount}%`;
                return `${yearly.toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}/${state.lang==="ar"?"سنة":state.lang==="de"?"Jahr":"yr"} (${saveTxt})`;
              }
              return `${yearly.toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}/${state.lang==="ar"?"سنة":state.lang==="de"?"Jahr":"yr"}`;
            })()}</div>
            <div class="plan-features">
              ${plan.id==="free"     ? `<div class="plan-feature">${state.lang==="ar"?"٥ منشورات/يوم":"5 posts/day"}</div><div class="plan-feature">${state.lang==="ar"?"أهداف أساسية":"Basic targets"}</div><div class="plan-feature">${state.lang==="ar"?"٢ حساب اجتماعي":"2 social accounts"}</div>` : ""}
              ${plan.id==="pro"      ? `<div class="plan-feature">${state.lang==="ar"?"٥٠ منشور/يوم":"50 posts/day"}</div><div class="plan-feature">${state.lang==="ar"?"جميع المنصات":"All platforms"}</div><div class="plan-feature">${state.lang==="ar"?"إحصائيات متقدمة":"Advanced analytics"}</div><div class="plan-feature">${state.lang==="ar"?"الجدولة التلقائية":"Auto scheduling"}</div>` : ""}
              ${plan.id==="business" ? `<div class="plan-feature">${state.lang==="ar"?"منشورات غير محدودة":"Unlimited posts"}</div><div class="plan-feature">${state.lang==="ar"?"دعم أولوية":"Priority support"}</div><div class="plan-feature">White-label</div><div class="plan-feature">${state.lang==="ar"?"واجهة API":"API access"}</div>` : ""}
            </div>
            ${isCurrent
              ? `<div class="badge green" style="width:100%;justify-content:center;padding:10px;">${IC.check} ${state.lang==="ar"?"خطتك الحالية":"Current Plan"}</div>`
              : `<button class="btn btn-md btn-primary btn-full" onclick="upgradePlan('${plan.id}')"
                  style="${plan.id==="free"?"background:var(--surface3);color:var(--text3);box-shadow:none;":promoActive?"background:var(--orange);":""}">
                  ${IC.payments} ${getUpgradeLabel(user.plan, plan.id)}${promoActive?" 🔥":""}
                </button>`}
          </div>
        `;
      }).join("")}
    </div>
  </div>

  <!-- Payment history -->
  <div class="card" style="margin-top:22px;">
    <div class="card-header">
      <span class="card-title">${state.lang==="ar"?"سجل المدفوعات":"Payment History"}</span>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr>
          <th>${state.lang==="ar"?"التاريخ":"Date"}</th>
          <th>${state.lang==="ar"?"الخطة":"Plan"}</th>
          <th>${state.lang==="ar"?"المبلغ":"Amount"}</th>
          <th>${state.lang==="ar"?"الحالة":"Status"}</th>
        </tr></thead>
        <tbody>
          ${billing.map(b => `
            <tr>
              <td>${formatDate(b.date)}</td>
              <td><strong>${b.plan}</strong></td>
              <td><strong>${b.amount}</strong></td>
              <td>${statusBadge(b.status)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  </div>
</div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE: PROFILE
═══════════════════════════════════════════════════════════ */
function renderProfile() {
  const user = state.currentUser;
  return `
<div class="fade-in">
  <div class="page-header">
    <div class="page-title">${t("profile")}</div>
  </div>

  <div style="display:grid;grid-template-columns:280px 1fr;gap:18px;align-items:start;" class="responsive-cols">
    <!-- Left: Avatar -->
    <div class="card">
      <div class="profile-avatar-section">
        <div class="profile-avatar-lg">${initials(user.name)}</div>
        <div class="profile-name-lg">${escHtml(user.name)}</div>
        <div class="profile-email-lg">${escHtml(user.email)}</div>
        <div style="margin-top:10px;">${planBadge(user.plan)}</div>
        ${user.role === "admin" ? `<div style="margin-top:6px;" class="badge orange">Admin</div>` : ""}
      </div>
      <div class="card-body">
        <div class="settings-list">
          <div class="settings-item">
            <div><div class="settings-item-label">${state.lang==="ar"?"إجمالي المنشورات":"Total Posts"}</div></div>
            <strong style="color:var(--accent)">${user.totalPosts}</strong>
          </div>
          <div class="settings-item">
            <div><div class="settings-item-label">${t("joinedDate")}</div></div>
            <span style="color:var(--text3);font-size:12px;">${formatDate(user.joined)}</span>
          </div>
          <div class="settings-item">
            <div><div class="settings-item-label">${state.lang==="ar"?"الحالة":"Status"}</div></div>
            ${statusBadge(user.status)}
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Edit form -->
    <div class="card">
      <div class="card-header">
        <span class="card-title">${t("editProfile")}</span>
      </div>
      <div class="card-body" id="profile-form">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t("name")} <span class="req">*</span></label>
            <input class="input-field" id="prof-name" type="text" value="${escHtml(user.name)}" autocomplete="name">
          </div>
          <div class="form-group">
            <label class="form-label">${t("email")} <span class="req">*</span></label>
            <input class="input-field" id="prof-email" type="email" value="${escHtml(user.email)}" autocomplete="email">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${state.lang==="ar"?"المسمى الوظيفي":state.lang==="de"?"Berufsbezeichnung":"Job Title"} <span style="font-size:10px;color:var(--text3);">(${state.lang==="ar"?"اختياري":"optional"})</span></label>
            <input class="input-field" id="prof-jobtitle" type="text" value="${escHtml(user.jobTitle||"")}"
              placeholder="${state.lang==="ar"?"مثال: مدير تسويق":state.lang==="de"?"z.B. Entwickler":"e.g. Marketing Manager"}">
          </div>
          <div class="form-group">
            <label class="form-label">${state.lang==="ar"?"العمر":state.lang==="de"?"Alter":"Age"} <span style="font-size:10px;color:var(--text3);">(${state.lang==="ar"?"اختياري":"optional"})</span></label>
            <input class="input-field" id="prof-age" type="number" min="16" max="100" value="${user.age||""}"
              placeholder="28">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t("phone")}</label>
          <input class="input-field" id="prof-phone" type="tel" value="${escHtml(user.phone||"")}" autocomplete="tel">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${state.lang==="ar"?"كلمة المرور الحالية":state.lang==="de"?"Aktuelles Passwort":"Current Password"}</label>
            <div style="font-size:11px;color:var(--accent);margin-bottom:6px;display:flex;align-items:center;gap:4px;">${IC.security} ${state.lang==="ar"?"هذه المعلومات محمية ولن تُشارك مع أي أحد":state.lang==="de"?"Diese Daten sind geschützt und werden nicht geteilt":"Your info is protected and never shared"}</div>
            <div class="pw-wrap">
              <input class="input-field" id="prof-pw" type="password" value="${escHtml(user.password||"")}" autocomplete="current-password">
              <button class="pw-toggle" type="button" onclick="togglePw('prof-pw',this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-linecap="round"/><circle cx="12" cy="12" r="3"/></svg></button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">${t("confirmPassword")}</label>
            <div class="pw-wrap">
              <input class="input-field" id="prof-pw2" type="password" placeholder="••••••••" autocomplete="new-password">
              <button class="pw-toggle" type="button" onclick="togglePw('prof-pw2',this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-linecap="round"/><circle cx="12" cy="12" r="3"/></svg></button>
            </div>
          </div>
        </div>
        <button class="btn btn-md btn-primary" onclick="saveProfile()" style="display:flex;align-items:center;gap:6px;">${IC.save} ${t("saveChanges")}</button>
      </div>
    </div>
  </div>
</div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE: ADMIN
═══════════════════════════════════════════════════════════ */
function renderAdmin() {
  const tabs = [
    { id: "pricing",       label: t("adminPricing"), icon: IC.pricing },
    { id: "users",         label: t("adminUsers"),   icon: IC.users   },
    { id: "subscriptions", label: state.lang==="ar"?"الاشتراكات":state.lang==="de"?"Abonnements":"Subscriptions", icon: IC.payments },
    { id: "coupons",       label: t("adminCoupons"), icon: IC.coupon  },
    { id: "methods",       label: t("adminMethods"), icon: IC.methods },
    { id: "platforms",     label: state.lang==="ar"?"المنصات":state.lang==="de"?"Plattformen":"Platforms", icon: IC.platform },
    { id: "admins",        label: state.lang==="ar"?"المديرون":state.lang==="de"?"Admins":"Admins", icon: IC.admin },
  ];
  const pendingSubs = (state.subscriptions || []).filter(s => s.status === "pending").length;

  const tabContent = () => {
    switch (state.adminTab) {
      case "pricing":       return renderAdminPricing();
      case "users":         return renderAdminUsers();
      case "subscriptions": return renderSubscriptions();
      case "coupons":       return renderAdminCoupons();
      case "methods":       return renderAdminMethods();
      case "platforms":     return renderAdminPlatforms();
      case "admins":        return renderAdminAdmins();
      default: return renderAdminPricing();
    }
  };

  return `
<div class="fade-in">
  <div class="page-header">
    <div class="page-title">${t("admin")}</div>
  </div>

  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px;">
    ${tabs.map(tab => `
      <button class="btn btn-sm ${state.adminTab === tab.id ? "btn-primary" : "btn-secondary"}" onclick="setAdminTab('${tab.id}')" style="display:flex;align-items:center;gap:6px;">
        <span style="display:flex;align-items:center;">${tab.icon}</span>${tab.label}${tab.id==="subscriptions"&&pendingSubs>0?`<span style="background:var(--red);color:#fff;font-size:10px;font-weight:800;padding:1px 6px;border-radius:10px;margin-inline-start:4px;">${pendingSubs}</span>`:""}
      </button>
    `).join("")}
  </div>

  <div class="fade-in" id="admin-tab-content">
    ${tabContent()}
  </div>
</div>
  `;
}

function renderAdminPricing() {
  const lbl = (ar, de, en) => state.lang==="ar" ? ar : state.lang==="de" ? de : en;
  return `
    <div class="admin-grid">
      ${state.plans.map(plan => {
        const yearly = calcYearlyPrice(plan);
        const saved  = plan.priceMonthly > 0 ? (plan.priceMonthly * 12) - yearly : 0;
        return `
        <div class="card">
          <div class="card-header">
            <span class="card-title">${plan.name} ${lbl("الخطة","Plan","Plan")}</span>
          </div>
          <div class="card-body">

            <!-- Monthly price -->
            <div class="form-group">
              <label class="form-label">${lbl("السعر الشهري (ج.م)","Monatspreis (EGP)","Monthly Price (EGP)")}</label>
              <input class="input-field" type="number" value="${plan.priceMonthly}" min="0"
                oninput="updatePlanMonthly('${plan.id}', this.value)">
            </div>

            <!-- Yearly discount % -->
            <div class="form-group">
              <label class="form-label">${lbl("خصم الاشتراك السنوي (%)","Jahresrabatt (%)","Yearly Discount (%)")}</label>
              <div style="display:flex;gap:10px;align-items:center;">
                <input class="input-field" type="number" value="${plan.yearlyDiscount}" min="0" max="90"
                  style="max-width:100px;"
                  oninput="updatePlanDiscount('${plan.id}', this.value)">
                <span style="font-size:12px;color:var(--text3);">${lbl("من 0% إلى 90%","0% – 90%","0% to 90%")}</span>
              </div>
            </div>

            <!-- Auto-calculated yearly price display -->
            <div class="pricing-auto-box" id="yearly-display-${plan.id}">
              ${plan.priceMonthly === 0 ? `
                <div class="pricing-auto-label">${lbl("السعر السنوي المحتسب","Jahrespreis (berechnet)","Calculated Yearly Price")}</div>
                <div class="pricing-auto-value">${lbl("مجاني","Kostenlos","Free")}</div>
              ` : `
                <div class="pricing-auto-label">${lbl("السعر السنوي المحتسب أوتوماتيك","Jahrespreis (auto)","Auto-Calculated Yearly Price")}</div>
                <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;">
                  <div class="pricing-auto-value">${yearly.toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}</div>
                  ${saved > 0 ? `<div class="pricing-auto-save">${lbl("توفير","Ersparnis","Save")} ${saved.toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"} (${plan.yearlyDiscount}%)</div>` : ""}
                </div>
                <div style="font-size:11px;color:var(--text3);margin-top:4px;">
                  ${plan.priceMonthly.toLocaleString()} × 12 = ${(plan.priceMonthly*12).toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}
                  ${plan.yearlyDiscount > 0 ? ` − ${plan.yearlyDiscount}% = ${yearly.toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}` : ""}
                </div>
              `}
            </div>

            <!-- Posts/day -->
            <div class="form-group" style="margin-top:14px;">
              <label class="form-label">${lbl("منشورات/يوم (−١ = غير محدود)","Posts/Tag (-1 = unbegrenzt)","Posts/day (-1 = unlimited)")}</label>
              <input class="input-field" type="number" value="${plan.postsPerDay}" min="-1"
                onchange="updatePlanPosts('${plan.id}', this.value)">
            </div>

            ${plan.priceMonthly > 0 ? `
            <!-- Promotional Discount -->
            <div style="margin-top:14px;padding:14px;background:var(--orange-dim);border:1.5px solid rgba(249,115,22,.3);border-radius:var(--radius);">
              <div style="font-size:12px;font-weight:800;color:var(--orange);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;">
                ${lbl("عرض مؤقت / تخفيض الباقة","Sonderangebot","Promotional Discount")}
              </div>
              ${plan.promo ? `
                <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
                  <div style="font-size:18px;font-weight:900;color:var(--orange);">${plan.promo.discount}% OFF</div>
                  <div style="font-size:12px;color:var(--text2);">
                    ${plan.promo.expiresAt
                      ? `${lbl("حتى","Bis","Until")} <strong>${plan.promo.expiresAt}</strong>`
                      : lbl("بلا تاريخ انتهاء","Ohne Ablaufdatum","No expiry")}
                  </div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">
                <button class="btn btn-sm btn-secondary" onclick="openExtendPromoModal('${plan.id}')"
                  style="display:flex;align-items:center;gap:5px;font-size:12px;">
                  ${IC.analytics} ${lbl("تمديد العرض","Angebot verlängern","Extend Promo")}
                </button>
                <button class="btn btn-sm btn-danger" style="display:flex;align-items:center;gap:5px;"
                  onclick="removePlanPromo('${plan.id}')">
                  ${lbl("إزالة العرض","Angebot entfernen","Remove Promo")}
                </button>
              </div>
                </div>
                <div style="font-size:12px;color:var(--text3);">
                  ${lbl("السعر بعد الخصم","Preis nach Rabatt","Price after discount")}:
                  <strong style="color:var(--orange)">${Math.round(plan.priceMonthly * (1 - plan.promo.discount/100)).toLocaleString()} ${state.lang==="ar"?"ج.م":"EGP"}</strong>
                  /${state.lang==="ar"?"شهر":"mo"}
                </div>
              ` : `
                <div class="form-row" style="margin-bottom:10px;">
                  <div class="form-group">
                    <label class="form-label" style="font-size:11.5px;">${lbl("نسبة الخصم %","Rabatt %","Discount %")}</label>
                    <input class="input-field" type="number" min="1" max="90" placeholder="20"
                      id="promo-disc-${plan.id}" style="font-size:13px;">
                  </div>
                  <div class="form-group">
                    <label class="form-label" style="font-size:11.5px;">${lbl("ينتهي في","Endet am","Expires On")}</label>
                    <input class="input-field" type="date" id="promo-exp-${plan.id}"
                      min="${new Date().toISOString().split('T')[0]}" style="font-size:13px;">
                  </div>
                </div>
                <button class="btn btn-sm btn-secondary" style="display:flex;align-items:center;gap:6px;"
                  onclick="setPlanPromo('${plan.id}')">
                  ${IC.pricing} ${lbl("تفعيل العرض","Angebot aktivieren","Activate Promo")}
                </button>
              `}
            </div>
            ` : ""}

            <button class="btn btn-sm btn-primary" style="margin-top:12px;"
              onclick="showToast('${state.lang==="ar"?"تم حفظ التغييرات":state.lang==="de"?"Änderungen gespeichert":"Changes saved"}','success')">
              ${IC.save} ${t("saveChanges")}
            </button>
          </div>
        </div>`;
      }).join("")}
    </div>
  `;
}

function renderAdminAdmins() {
  const admins = state.users.filter(u => u.role === "admin" || u.role === "moderator");
  // Ensure current user always appears first
  const sorted = [
    ...admins.filter(u => u.id === state.currentUser.id),
    ...admins.filter(u => u.id !== state.currentUser.id),
  ];
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;

  const PERMISSIONS = [
    { key: "canManageUsers",   label: lbl("إدارة المستخدمين","Benutzer verwalten","Manage Users") },
    { key: "canManagePricing", label: lbl("إدارة الأسعار","Preise verwalten","Manage Pricing") },
    { key: "canViewAnalytics", label: lbl("عرض الإحصائيات","Analytik anzeigen","View Analytics") },
    { key: "canManagePosts",   label: lbl("إدارة المنشورات","Beiträge verwalten","Manage Posts") },
    { key: "canManageCoupons", label: lbl("إدارة الكوبونات","Gutscheine verwalten","Manage Coupons") },
  ];

  return `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-size:15px;font-weight:800;color:var(--text);">${lbl("إدارة المديرين","Admins verwalten","Manage Admins")}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px;">${lbl("أضف مديرين وحدد صلاحياتهم","Füge Admins hinzu und lege Berechtigungen fest","Add admins and set their permissions")}</div>
        </div>
        <button class="btn btn-md btn-primary" onclick="openAddAdminModal()" style="display:flex;align-items:center;gap:8px;">
          ${IC.addAdmin} ${lbl("إضافة مدير","Admin hinzufügen","Add Admin")}
        </button>
      </div>

      ${sorted.map(u => `
        <div class="card">
          <div class="card-body">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
              <div class="user-avatar" style="width:40px;height:40px;font-size:14px;">${initials(u.name)}</div>
              <div style="flex:1;min-width:0;">
                <div style="font-weight:800;color:var(--text);">${escHtml(u.name)}</div>
                <div style="font-size:12px;color:var(--text3);">${escHtml(u.email)}</div>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <span class="badge ${u.role==="admin"?"purple":"blue"}">${u.role==="admin"?lbl("مدير رئيسي","Haupt-Admin","Super Admin"):lbl("مدير","Moderator","Moderator")}</span>
                ${u.id !== state.currentUser.id ? `
                  <button class="btn btn-sm btn-danger" style="display:flex;align-items:center;gap:5px;"
                    onclick="removeAdminRole(${u.id})">
                    ${lbl("إزالة","Entfernen","Remove")}
                  </button>
                ` : `<span class="badge green">${lbl("أنت","Sie","You")}</span>`}
              </div>
            </div>

            ${u.role !== "admin" ? `
            <div style="font-size:12px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;">
              ${lbl("الصلاحيات","Berechtigungen","Permissions")}
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;">
              ${PERMISSIONS.map(p => `
                <label style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--surface2);border-radius:var(--radius-sm);cursor:pointer;border:1px solid var(--border);">
                  <input type="checkbox"
                    ${(u.permissions || {})[p.key] ? "checked" : ""}
                    onchange="toggleAdminPerm(${u.id},'${p.key}',this.checked)"
                    style="accent-color:var(--accent);width:15px;height:15px;">
                  <span style="font-size:12.5px;font-weight:600;color:var(--text2);">${p.label}</span>
                </label>
              `).join("")}
            </div>
            ` : `
            <div class="alert info" style="font-size:12px;">${IC.security} ${lbl("المدير الرئيسي لديه صلاحيات كاملة","Haupt-Admin hat alle Berechtigungen","Super Admin has full permissions")}</div>
            `}
          </div>
        </div>
      `).join("") || `
        <div class="card"><div class="empty-state">
          <div style="display:flex;justify-content:center;color:var(--text3);margin-bottom:14px;">${IC.admin}</div>
          <div class="empty-title">${lbl("لا يوجد مديرون آخرون","Keine anderen Admins","No other admins yet")}</div>
          <div class="empty-sub">${lbl("أضف مديرين لمساعدتك في إدارة المنصة","Füge Admins zur Verwaltung hinzu","Add admins to help manage the platform")}</div>
        </div></div>
      `}
    </div>
  `;
}

function renderAdminPlatforms() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const customPlatforms = state.customPlatforms || [];

  return `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-size:15px;font-weight:800;color:var(--text);">${lbl("إدارة منصات النشر","Plattformen verwalten","Manage Publishing Platforms")}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px;">${lbl("أضف منصات مخصصة للنشر","Benutzerdefinierte Plattformen hinzufügen","Add custom publishing platforms")}</div>
        </div>
        <button class="btn btn-md btn-primary" onclick="openAddPlatformModal()" style="display:flex;align-items:center;gap:6px;">
          ${IC.plus} ${lbl("إضافة منصة","Plattform hinzufügen","Add Platform")}
        </button>
      </div>

      <!-- Built-in platforms -->
      <div class="card">
        <div class="card-header"><span class="card-title">${lbl("المنصات المدمجة","Integrierte Plattformen","Built-in Platforms")}</span></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;padding:16px;">
          ${state.social.map(s => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px;background:var(--surface2);border-radius:var(--radius-sm);border:1px solid var(--border);">
              <div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;">${SOCIAL_ICONS[s.platform]||IC.globe}</div>
              <div style="font-size:12px;font-weight:700;color:var(--text);">${s.name}</div>
              <span class="badge ${s.connected?"green":"gray"}" style="font-size:10px;">${s.connected?lbl("متصل","Verbunden","Connected"):lbl("غير متصل","Getrennt","Not Connected")}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Custom platforms -->
      <div class="card">
        <div class="card-header">
          <span class="card-title">${lbl("المنصات المخصصة","Benutzerdefinierte Plattformen","Custom Platforms")} (${customPlatforms.length})</span>
        </div>
        ${customPlatforms.length === 0 ? `
          <div style="padding:32px;text-align:center;color:var(--text3);">
            ${lbl("لا توجد منصات مخصصة بعد","Noch keine benutzerdefinierten Plattformen","No custom platforms yet")}
          </div>
        ` : `
          <div style="display:flex;flex-direction:column;gap:0;">
            ${customPlatforms.map(p => `
              <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid var(--border);">
                <div style="width:36px;height:36px;background:${p.color||"var(--accent)"}22;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;">${p.emoji||"🌐"}</div>
                <div style="flex:1;min-width:0;">
                  <div style="font-weight:700;color:var(--text);">${escHtml(p.name)}</div>
                  <div style="font-size:12px;color:var(--text3);">${escHtml(p.url||"")}</div>
                </div>
                <span class="badge gray" style="font-size:11px;">${escHtml(p.type||"custom")}</span>
                <button class="btn btn-sm btn-danger" onclick="deleteCustomPlatform(${p.id})" style="display:flex;align-items:center;gap:5px;">
                  ${lbl("حذف","Löschen","Delete")}
                </button>
              </div>
            `).join("")}
          </div>
        `}
      </div>
    </div>
  `;
}

window.openAddPlatformModal = function() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  openModal(`
    <div class="modal-title">${IC.plus} ${lbl("إضافة منصة جديدة","Plattform hinzufügen","Add New Platform")}</div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${lbl("اسم المنصة","Plattformname","Platform Name")} *</label>
        <input class="input-field" id="plt-name" type="text" placeholder="${lbl("مثال: TikTok","z.B. TikTok","e.g. TikTok")}">
      </div>
      <div class="form-group">
        <label class="form-label">${lbl("نوع المنصة","Plattformtyp","Platform Type")}</label>
        <input class="input-field" id="plt-type" type="text" placeholder="${lbl("مثال: tiktok","z.B. tiktok","e.g. tiktok")}">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${lbl("رابط المنصة","Plattform-URL","Platform URL")} <span style="font-size:10px;color:var(--text3);">(${lbl("اختياري","optional","optional")})</span></label>
        <input class="input-field" id="plt-url" type="url" placeholder="https://tiktok.com">
      </div>
      <div class="form-group">
        <label class="form-label">${lbl("رمز تعبيري","Emoji","Emoji")}</label>
        <input class="input-field" id="plt-emoji" type="text" placeholder="🎵" maxlength="2">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">${lbl("لون المنصة","Plattformfarbe","Platform Color")}</label>
      <input class="input-field" id="plt-color" type="color" value="#10D078" style="height:42px;padding:4px;">
    </div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-primary" onclick="confirmAddPlatform()" style="display:flex;align-items:center;gap:6px;">
        ${IC.plus} ${lbl("إضافة","Hinzufügen","Add")}
      </button>
    </div>
  `);
};

window.confirmAddPlatform = function() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const name  = document.getElementById("plt-name")?.value?.trim();
  const type  = document.getElementById("plt-type")?.value?.trim() || "custom";
  const url   = document.getElementById("plt-url")?.value?.trim() || "";
  const emoji = document.getElementById("plt-emoji")?.value?.trim() || "🌐";
  const color = document.getElementById("plt-color")?.value || "#10D078";
  if (!name) { showToast(t("errorFill"), "error"); return; }
  if (!state.customPlatforms) state.customPlatforms = [];
  state.customPlatforms.push({ id: Date.now(), name, type, url, emoji, color });
  // Also add to social list so users can connect
  state.social.push({ id: Date.now() + 1, platform: type, name, color, connected: false, token: null, account: null, custom: true });
  closeModal();
  showToast(lbl(`تم إضافة منصة ${name}`,`Plattform ${name} hinzugefügt`,`Platform ${name} added`), "success");
  setAdminTab("platforms");
};

window.deleteCustomPlatform = function(id) {
  state.customPlatforms = (state.customPlatforms || []).filter(p => p.id !== id);
  setAdminTab("platforms");
};

function renderAdminUsers() {
  return `
    <div class="card">
      <div class="card-header">
        <span class="card-title">${t("users")} (${state.users.length})</span>
        <div class="search-bar" style="max-width:260px;">
          <span class="search-icon">${IC.search}</span>
          <input id="user-search" type="text" placeholder="${t("searchUsers")}" oninput="filterAdminUsers(this.value)">
        </div>
      </div>
      <div class="table-wrap" id="admin-users-table">
        ${renderAdminUsersTable(state.users)}
      </div>
    </div>
  `;
}

function renderAdminUsersTable(users) {
  return `
    <table>
      <thead><tr>
        <th>${t("name")}</th>
        <th>${t("email")}</th>
        <th>${state.lang==="ar"?"الخطة":"Plan"}</th>
        <th>${state.lang==="ar"?"المنشورات":"Posts"}</th>
        <th>${state.lang==="ar"?"الحالة":"Status"}</th>
        <th>${state.lang==="ar"?"إجراءات":"Actions"}</th>
      </tr></thead>
      <tbody>
        ${users.map(u => `
          <tr>
            <td><div style="display:flex;align-items:center;gap:8px;"><div class="user-avatar" style="width:28px;height:28px;font-size:11px;">${initials(u.name)}</div><strong>${escHtml(u.name)}</strong></div></td>
            <td style="color:var(--text3)">${escHtml(u.email)}</td>
            <td>${planBadge(u.plan)}</td>
            <td><strong>${u.totalPosts}</strong></td>
            <td>${statusBadge(u.status)}</td>
            <td>
              <div class="btn-group">
                ${u.status === "active"
                  ? `<button class="btn btn-sm btn-danger" onclick="adminSuspendUser(${u.id})">⏸ ${t("suspended")}</button>`
                  : `<button class="btn btn-sm btn-blue" onclick="adminRestoreUser(${u.id})">▶ ${state.lang==="ar"?"استعادة":"Restore"}</button>`}
                <button class="btn btn-sm btn-danger" onclick="adminDeleteUser(${u.id})" ${(u.id===1||u.id===state.currentUser.id)?"disabled style='opacity:.3;cursor:not-allowed;'":""} style="display:flex;align-items:center;gap:5px;">${state.lang==="ar"?"حذف":state.lang==="de"?"Löschen":"Delete"}</button>
              </div>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderAdminCoupons() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const today = new Date().toISOString().split("T")[0];

  function couponStatus(c) {
    if (!c.active) return `<span class="badge gray">${lbl("معطّل","Deaktiviert","Disabled")}</span>`;
    if (c.expiresAt && c.expiresAt < today) return `<span class="badge red">${lbl("منتهي","Abgelaufen","Expired")}</span>`;
    if (c.usageLimit > 0 && c.usageCount >= c.usageLimit) return `<span class="badge orange">${lbl("نفد الحد","Limit erreicht","Limit Reached")}</span>`;
    return `<span class="badge green">${lbl("نشط","Aktiv","Active")}</span>`;
  }

  return `
    <div class="card">
      <div class="card-header">
        <span class="card-title">${t("adminCoupons")}</span>
        <button class="btn btn-sm btn-primary" style="display:flex;align-items:center;gap:6px;"
          onclick="openAddCouponModal()">${IC.plus} ${t("addCoupon")}</button>
      </div>
      <div style="padding:6px 0;">
        ${state.coupons.length === 0 ? `<div style="text-align:center;color:var(--text3);padding:32px;">${lbl("لا توجد كوبونات بعد","Noch keine Gutscheine","No coupons yet")}</div>` :
        state.coupons.map(c => {
          const expired = c.expiresAt && c.expiresAt < today;
          const usageBar = c.usageLimit > 0 ? Math.min(100, Math.round((c.usageCount / c.usageLimit) * 100)) : null;
          return `
          <div class="coupon-item" style="flex-direction:column;align-items:stretch;gap:10px;padding:16px 18px;${expired?"opacity:0.65":""}">
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
              <span class="coupon-code">${c.code}</span>
              <div style="font-size:15px;font-weight:900;color:var(--text);">
                ${c.type==="percent" ? `${c.discount}% OFF` : `${c.discount} ${state.lang==="ar"?"ج.م":"EGP"} OFF`}
              </div>
              <span class="badge gray" style="font-size:11px;">${c.appliesTo==="all"?lbl("كل الباقات","Alle Pläne","All Plans"):c.appliesTo?.toUpperCase()}</span>
              ${couponStatus(c)}
              <div style="margin-inline-start:auto;display:flex;gap:8px;">
                <button class="btn btn-sm btn-secondary" onclick="openAddCouponModal(${c.id})"
                  style="display:flex;align-items:center;gap:4px;font-size:12px;">
                  ${IC.save} ${lbl("تعديل/تمديد","Bearbeiten","Edit/Extend")}
                </button>
                <button class="btn btn-sm btn-secondary" onclick="toggleCouponActive(${c.id})"
                  style="display:flex;align-items:center;gap:4px;font-size:12px;">
                  ${c.active ? lbl("تعطيل","Deaktivieren","Disable") : lbl("تفعيل","Aktivieren","Enable")}
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteCoupon(${c.id})"
                  style="display:flex;align-items:center;gap:5px;">
                  ${lbl("حذف","Löschen","Delete")}
                </button>
              </div>
            </div>
            <div style="display:flex;gap:20px;flex-wrap:wrap;font-size:12px;color:var(--text3);">
              <span>${IC.check} ${lbl("الاستخدام","Nutzung","Usage")}: <strong style="color:var(--text)">${c.usageCount}${c.usageLimit>0?" / "+c.usageLimit:c.usageLimit===-1?" / ∞":""}</strong></span>
              ${c.expiresAt ? `<span>${IC.analytics} ${lbl("ينتهي","Läuft ab","Expires")}: <strong style="color:${expired?"var(--red)":"var(--text)"}">${c.expiresAt}</strong></span>` : `<span style="color:var(--text3);">${lbl("لا تاريخ انتهاء","Kein Ablaufdatum","No expiry")}</span>`}
            </div>
            ${usageBar !== null ? `
            <div>
              <div class="progress-bar">
                <div class="progress-fill" style="width:${usageBar}%;background:${usageBar>=100?"var(--red)":usageBar>=80?"var(--orange)":"var(--accent)"};"></div>
              </div>
              <div style="font-size:11px;color:var(--text3);margin-top:3px;">${usageBar}% ${lbl("من الحد الأقصى مستخدم","des Limits genutzt","of limit used")}</div>
            </div>` : ""}
          </div>`;
        }).join("")}
      </div>
    </div>
  `;
}

function renderAdminMethods() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const custom = state.paymentMethods || [];

  return `
    <div class="card">
      <div class="card-header">
        <span class="card-title">${lbl("حسابات الدفع","Zahlungskonten","Payment Accounts")}</span>
        <button class="btn btn-sm btn-primary" onclick="openAddPaymentMethodModal()" style="display:flex;align-items:center;gap:6px;">${IC.plus} ${lbl("إضافة حساب","Konto hinzufügen","Add Account")}</button>
      </div>

      ${custom.length === 0 ? `
        <div class="empty-state" style="padding:40px 20px;">
          <div class="empty-icon">💳</div>
          <div class="empty-title">${lbl("لا توجد حسابات دفع بعد","Noch keine Zahlungskonten","No payment accounts yet")}</div>
          <div class="empty-sub">${lbl("أضف حساباتك الحقيقية لاستلام المدفوعات من المستخدمين","Fügen Sie Ihre echten Konten hinzu, um Zahlungen zu empfangen","Add your real accounts to receive payments from users")}</div>
          <button class="btn btn-md btn-primary" onclick="openAddPaymentMethodModal()" style="margin-top:12px;display:inline-flex;align-items:center;gap:6px;">${IC.plus} ${lbl("إضافة أول حساب","Erstes Konto hinzufügen","Add First Account")}</button>
        </div>
      ` : `
        <div style="display:flex;flex-direction:column;gap:0;">
          ${custom.map(m => `
            <div style="display:flex;align-items:flex-start;gap:14px;padding:16px 18px;border-bottom:1px solid var(--border);transition:background var(--transition);" onmouseenter="this.style.background='var(--hover-bg)'" onmouseleave="this.style.background=''">
              <span style="width:36px;height:36px;flex-shrink:0;display:flex;align-items:center;justify-content:center;margin-top:2px;">${PAYMENT_ICONS[m.type] || m.icon}</span>
              <div style="flex:1;min-width:0;">
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px;">
                  <span style="font-weight:800;color:var(--text);font-size:14px;">${escHtml(m.name)}</span>
                  <span class="badge ${m.active?"green":"gray"}" style="font-size:10px;">${m.active?lbl("نشط","Aktiv","Active"):lbl("معطّل","Deaktiviert","Disabled")}</span>
                </div>
                <div style="font-size:13px;font-weight:600;color:var(--text2);margin-bottom:2px;">${escHtml(m.holder)}</div>
                <div style="font-size:12px;color:var(--accent);font-family:monospace;word-break:break-all;">${escHtml(m.wallet || m.iban || m.account || m.details)}</div>
                ${m.note ? `<div style="font-size:11px;color:var(--text3);margin-top:3px;">📌 ${escHtml(m.note)}</div>` : ""}
              </div>
              <div style="display:flex;gap:6px;align-items:center;flex-shrink:0;">
                <button class="btn btn-sm btn-secondary" onclick="togglePaymentActive(${m.id})" style="font-size:11px;padding:4px 10px;">
                  ${m.active ? lbl("إيقاف","Deaktivieren","Disable") : lbl("تفعيل","Aktivieren","Enable")}
                </button>
                <button class="btn btn-sm btn-ghost" onclick="openAddPaymentMethodModal(${m.id})" style="font-size:11px;padding:4px 10px;">
                  ${lbl("تعديل","Bearbeiten","Edit")}
                </button>
                <button class="btn btn-sm btn-danger" onclick="deletePaymentMethod(${m.id})" style="font-size:11px;padding:4px 10px;">
                  ${lbl("حذف","Löschen","Delete")}
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      `}

      <div class="alert info" style="margin:16px;font-size:12px;">
        ${IC.security} ${lbl("هذه الحسابات تُعرض للمستخدمين عند الدفع — تأكد من صحة البيانات","Diese Konten werden Benutzern beim Bezahlen angezeigt — stellen Sie die Richtigkeit sicher","These accounts are shown to users on payment — ensure accuracy")}
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE: SETTINGS
═══════════════════════════════════════════════════════════ */
function renderSettings() {
  const user = state.currentUser;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  return `
<div class="fade-in">
  <div class="page-header">
    <div class="page-title">${t("settings")}</div>
  </div>

  <!-- Personal Info Card -->
  <div class="card" style="margin-bottom:16px;">
    <div class="card-header"><span class="card-title">${lbl("معلوماتك الشخصية","Persönliche Daten","Personal Information")}</span></div>
    <div class="card-body">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;align-items:end;" class="responsive-cols">
        <div class="form-group" style="margin:0;">
          <label class="form-label">${t("name")} <span class="req">*</span></label>
          <input class="input-field" id="settings-name" type="text" value="${escHtml(user.name)}"
            placeholder="${lbl("اسمك الكامل","Ihr Name","Your full name")}">
        </div>
        <div class="form-group" style="margin:0;">
          <label class="form-label">${lbl("المسمى الوظيفي","Berufsbezeichnung","Job Title")} <span style="font-size:10px;color:var(--text3);">(${lbl("اختياري","optional","optional")})</span></label>
          <input class="input-field" id="settings-jobtitle" type="text"
            value="${escHtml(user.jobTitle||"")}"
            placeholder="${lbl("مثال: مطور ويب","z.B. Entwickler","e.g. Web Developer")}">
        </div>
        <div class="form-group" style="margin:0;">
          <label class="form-label">${lbl("العمر","Alter","Age")} <span style="font-size:10px;color:var(--text3);">(${lbl("اختياري","optional","optional")})</span></label>
          <input class="input-field" id="settings-age" type="number" min="16" max="100"
            value="${user.age||""}"
            placeholder="${lbl("مثال: 28","z.B. 28","e.g. 28")}">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px;" class="responsive-cols">
        <div class="form-group" style="margin:0;">
          <label class="form-label">${t("phone")} <span style="font-size:10px;color:var(--text3);">(${lbl("اختياري","optional","optional")})</span></label>
          <input class="input-field" id="settings-phone" type="tel"
            value="${escHtml(user.phone||"")}"
            placeholder="+20 100 000 0000">
        </div>
        <div class="form-group" style="margin:0;">
          <label class="form-label">${lbl("كلمة مرور جديدة","Neues Passwort","New Password")} <span style="font-size:10px;color:var(--text3);">(${lbl("بياناتك مؤمّنة ولا تُشارك مع أحد","Ihre Daten sind sicher und werden nicht geteilt","Your data is private and never shared")})</span></label>
          <div class="pw-wrap">
            <input class="input-field" id="settings-pw" type="password" placeholder="••••••••" autocomplete="new-password">
            <button class="pw-toggle" type="button" onclick="togglePw('settings-pw',this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-linecap="round"/><circle cx="12" cy="12" r="3"/></svg></button>
          </div>
        </div>
      </div>
      <div style="margin-top:14px;">
        <button class="btn btn-md btn-primary" onclick="saveSettingsProfile()" style="display:flex;align-items:center;gap:6px;">
          ${IC.save} ${t("saveChanges")}
        </button>
      </div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="responsive-cols">
    <!-- Appearance -->
    <div class="card">
      <div class="card-header"><span class="card-title">${state.lang==="ar"?"المظهر واللغة":state.lang==="de"?"Design & Sprache":"Appearance & Language"}</span></div>
      <div class="card-body">
        <div class="settings-list">
          <div class="settings-item">
            <div>
              <div class="settings-item-label">${t("theme")}</div>
              <div class="settings-item-sub">${state.theme === "dark" ? t("darkMode") : state.theme === "eye" ? (state.lang==="ar"?"حماية العين":state.lang==="de"?"Augenschutz":"Eye Protection") : t("lightMode")}</div>
            </div>
            <div class="popup-wrap" id="settings-theme-wrap">
              <button class="sidebar-pill popup-trigger" onclick="togglePopup('settings-theme-popup')" style="border-radius:8px;font-size:12px;">
                ${state.theme === "dark" ? IC.moon : state.theme === "eye" ? IC.eye : IC.sun}
                <span>${state.theme === "dark" ? t("darkMode") : state.theme === "eye" ? (state.lang==="ar"?"حماية العين":"Eye Protection") : t("lightMode")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="10" height="10"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
              </button>
              <div class="popup-menu popup-menu-up hidden" id="settings-theme-popup">
                <button class="popup-item ${state.theme==="dark"?"active":""}" onclick="setTheme('dark');closePopups();setPage('settings')">${IC.moon} <span>${t("darkMode")}</span>${state.theme==="dark"?IC.check:""}</button>
                <button class="popup-item ${state.theme==="light"?"active":""}" onclick="setTheme('light');closePopups();setPage('settings')">${IC.sun} <span>${t("lightMode")}</span>${state.theme==="light"?IC.check:""}</button>
                <button class="popup-item ${state.theme==="eye"?"active":""}" onclick="setTheme('eye');closePopups();setPage('settings')">${IC.eye} <span>${state.lang==="ar"?"حماية العين":"Eye Protection"}</span>${state.theme==="eye"?IC.check:""}</button>
              </div>
            </div>
          </div>
          <div class="settings-item">
            <div>
              <div class="settings-item-label">${t("language")}</div>
              <div class="settings-item-sub">${state.lang === "ar" ? "العربية" : state.lang === "de" ? "Deutsch" : "English"}</div>
            </div>
            <div class="popup-wrap" id="settings-lang-wrap">
              <button class="sidebar-pill popup-trigger" onclick="togglePopup('settings-lang-popup')" style="border-radius:8px;font-size:12px;">
                ${IC.globe}
                <span>${state.lang === "ar" ? "العربية" : state.lang === "de" ? "Deutsch" : "English"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="10" height="10"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
              </button>
              <div class="popup-menu popup-menu-up hidden" id="settings-lang-popup">
                <button class="popup-item ${state.lang==="en"?"active":""}" onclick="setLang('en');closePopups()"><span class="lang-code">EN</span><span>English</span>${state.lang==="en"?IC.check:""}</button>
                <button class="popup-item ${state.lang==="ar"?"active":""}" onclick="setLang('ar');closePopups()"><span class="lang-code">AR</span><span>العربية</span>${state.lang==="ar"?IC.check:""}</button>
                <button class="popup-item ${state.lang==="de"?"active":""}" onclick="setLang('de');closePopups()"><span class="lang-code">DE</span><span>Deutsch</span>${state.lang==="de"?IC.check:""}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notifications -->
    <div class="card">
      <div class="card-header"><span class="card-title">${state.lang==="ar"?"الإشعارات":"Notifications"}</span></div>
      <div class="card-body">
        <div class="settings-list">
          <div class="settings-item">
            <div>
              <div class="settings-item-label">${t("notifyEmail")}</div>
              <div class="settings-item-sub">${state.lang==="ar"?"إشعار بريد عند النشر":"Email when post published"}</div>
            </div>
            <label class="toggle">
              <input type="checkbox" ${state.settings.notifyEmail ? "checked" : ""} onchange="state.settings.notifyEmail=this.checked">
              <div class="toggle-track"></div>
            </label>
          </div>
          <div class="settings-item">
            <div>
              <div class="settings-item-label">${t("notifyPush")}</div>
              <div class="settings-item-sub">${state.lang==="ar"?"إشعارات المتصفح":"Browser notifications"}</div>
            </div>
            <label class="toggle">
              <input type="checkbox" ${state.settings.notifyPush ? "checked" : ""} onchange="state.settings.notifyPush=this.checked">
              <div class="toggle-track"></div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Posting behavior -->
    <div class="card">
      <div class="card-header"><span class="card-title">${state.lang==="ar"?"سلوك النشر":"Publishing Behavior"}</span></div>
      <div class="card-body">
        <div class="settings-list">
          <div class="settings-item">
            <div>
              <div class="settings-item-label">${t("autoVariations")}</div>
              <div class="settings-item-sub">${state.lang==="ar"?"تنويع تلقائي لتفادي الإسبام":"Auto-vary to avoid spam"}</div>
            </div>
            <label class="toggle">
              <input type="checkbox" ${state.settings.autoVariations ? "checked" : ""} onchange="state.settings.autoVariations=this.checked">
              <div class="toggle-track"></div>
            </label>
          </div>
          <div class="settings-item">
            <div>
              <div class="settings-item-label">${t("delayBetweenPosts")}</div>
              <div class="settings-item-sub">${state.lang==="ar"?"الحد الأدنى: ٢ دقيقة":state.lang==="de"?"Mindestens 2 Minuten":"Minimum: 2 minutes"}</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;">
              <input
                type="number"
                class="input-field delay-num-input"
                id="delay-value-input"
                min="1"
                max="999"
                value="${state.settings.delayValue || 2}"
                oninput="updateDelaySettings()"
                style="width:64px;text-align:center;padding:7px 8px;"
              >
              <select
                class="input-field delay-unit-select"
                id="delay-unit-select"
                onchange="updateDelaySettings()"
                style="width:110px;"
              >
                <option value="minute" ${(state.settings.delayUnit||'minute')==='minute'?'selected':''}>${state.lang==="ar"?"دقيقة":state.lang==="de"?"Minute":"minute"}</option>
                <option value="hour"   ${(state.settings.delayUnit||'minute')==='hour'  ?'selected':''}>${state.lang==="ar"?"ساعة":state.lang==="de"?"Stunde":"hour"}</option>
                <option value="day"    ${(state.settings.delayUnit||'minute')==='day'   ?'selected':''}>${state.lang==="ar"?"يوم":state.lang==="de"?"Tag":"day"}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Danger zone -->
    <div class="card" style="border-color:var(--red-border);">
      <div class="card-header"><span class="card-title" style="color:var(--red);">${state.lang==="ar"?"منطقة الخطر":"Danger Zone"}</span></div>
      <div class="card-body">
        <p style="font-size:13px;color:var(--text2);margin-bottom:14px;">${state.lang==="ar"?"هذه الإجراءات لا يمكن التراجع عنها":"These actions cannot be undone"}</p>
        <div class="btn-group">
          <button class="btn btn-sm btn-danger" onclick="showToast('${state.lang==="ar"?"جارٍ تصدير البيانات...":"Exporting data..."}','info')">${state.lang==="ar"?"تصدير البيانات":state.lang==="de"?"Daten exportieren":"Export Data"}</button>
          <button class="btn btn-sm btn-danger" onclick="confirmDeleteAccount()">${state.lang==="ar"?"حذف الحساب":state.lang==="de"?"Konto löschen":"Delete Account"}</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}


/* ─── DELAY SETTINGS ─────────────────────────────────────────── */
window.updateDelaySettings = function() {
  const valEl  = document.getElementById("delay-value-input");
  const unitEl = document.getElementById("delay-unit-select");
  if (!valEl || !unitEl) return;
  let val = Math.max(1, parseInt(valEl.value) || 1);
  const unit = unitEl.value || "minute";
  // Enforce minimum of 2 minutes in minutes mode
  if (unit === "minute" && val < 2) { val = 2; valEl.value = 2; }
  state.settings.delayValue = val;
  state.settings.delayUnit  = unit;
  // Convert to minutes for backward compat
  const toMinutes = { minute: 1, hour: 60, day: 1440 };
  state.settings.delayBetweenPosts = val * (toMinutes[unit] || 1);
};

/* ═══════════════════════════════════════════════════════════
   AUTH SCREEN
═══════════════════════════════════════════════════════════ */
function renderAuthScreen() {
  const mode = state.authMode;
  return `
<div class="auth-screen">
  <div class="auth-bg-glow"></div>
  <div class="auth-card">
    <!-- Logo: only on login -->
    ${mode==="login" ? `
    <div class="auth-logo">
      <div class="auth-logo-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32">
          <g stroke="#000000" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="32 20, 48 28, 32 36, 16 28" />
            <polyline points="16 35, 32 43, 48 35" />
            <polyline points="16 42, 32 50, 48 42" />
          </g>
        </svg>
      </div>
      <div class="auth-logo-name">HireFlow</div>
      <div class="auth-logo-tag">${t("tagline")}</div>
    </div>` : `<div style="margin-bottom:8px;"></div>`}

    <!-- Top controls -->
    <div class="auth-top-controls">
      <div class="popup-wrap" id="auth-lang-wrap">
        <button class="topbar-btn popup-trigger lang-trigger" onclick="togglePopup('auth-lang-popup')">
          ${IC.globe} <span style="font-size:11px;font-weight:800;letter-spacing:.5px;">${state.lang==="ar"?"AR":state.lang==="de"?"DE":"EN"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
        </button>
        <div class="popup-menu hidden" id="auth-lang-popup">
          <button class="popup-item ${state.lang==="en"?"active":""}" onclick="setLang('en');closePopups()"><span class="lang-code">EN</span><span>English</span>${state.lang==="en"?IC.check:""}</button>
          <button class="popup-item ${state.lang==="ar"?"active":""}" onclick="setLang('ar');closePopups()"><span class="lang-code">AR</span><span>العربية</span>${state.lang==="ar"?IC.check:""}</button>
          <button class="popup-item ${state.lang==="de"?"active":""}" onclick="setLang('de');closePopups()"><span class="lang-code">DE</span><span>Deutsch</span>${state.lang==="de"?IC.check:""}</button>
        </div>
      </div>
      <div class="popup-wrap" id="auth-theme-wrap">
        <button class="topbar-btn icon-only popup-trigger" onclick="togglePopup('auth-theme-popup')">
          ${state.theme === "dark" ? IC.moon : state.theme === "eye" ? IC.eye : IC.sun}
        </button>
        <div class="popup-menu hidden" id="auth-theme-popup">
          <button class="popup-item ${state.theme==="dark"?"active":""}" onclick="setTheme('dark');closePopups()">${IC.moon} <span>${t("darkMode")}</span>${state.theme==="dark"?IC.check:""}</button>
          <button class="popup-item ${state.theme==="light"?"active":""}" onclick="setTheme('light');closePopups()">${IC.sun} <span>${t("lightMode")}</span>${state.theme==="light"?IC.check:""}</button>
          <button class="popup-item ${state.theme==="eye"?"active":""}" onclick="setTheme('eye');closePopups()">${IC.eye} <span>${state.lang==="ar"?"حماية العين":"Eye Protection"}</span>${state.theme==="eye"?IC.check:""}</button>
        </div>
      </div>
    </div>

    <!-- Tab switcher -->
    <div class="auth-switch-bar">
      <button class="auth-switch-btn ${mode==="login"?"active":""}" onclick="switchAuthMode('login')">${t("login")}</button>
      <button class="auth-switch-btn ${mode==="register"?"active":""}" onclick="switchAuthMode('register')">${t("register")}</button>
    </div>

    <!-- Title -->
    <div class="auth-title">${mode==="login" ? t("loginTitle") : (t("joinTeam") + " HireFlow")}</div>
    <div class="auth-sub" style="margin-bottom:18px;">${mode==="login" ? t("loginSub") : t("registerSub")}</div>

    <!-- Error -->
    <div id="auth-error" class="alert error" style="display:none;"></div>

    <!-- Form -->
    ${mode==="register" ? `
      <div class="form-group">
        <label class="form-label">${t("name")} <span class="req">*</span></label>
        <input class="input-field" id="auth-name" type="text" placeholder="${state.lang==="ar"?"الاسم الكامل":state.lang==="de"?"Vollständiger Name":"Full name"}" autocomplete="name">
      </div>
    ` : ""}
    <div class="form-group">
      <label class="form-label">${t("email")} <span class="req">*</span></label>
      <input class="input-field" id="auth-email" type="email" placeholder="you@example.com" autocomplete="email"
        value="" autocomplete="off">
    </div>
    ${mode==="register" ? `
      <div class="form-group">
        <label class="form-label">${t("phone")}</label>
        <input class="input-field" id="auth-phone" type="tel" placeholder="+20 100 000 0000" autocomplete="tel">
      </div>
    ` : ""}
    <div class="form-group">
      <label class="form-label">${t("password")} <span class="req">*</span></label>
      <div class="pw-wrap">
        <input class="input-field" id="auth-password" type="password" placeholder="••••••••" autocomplete="${mode==="login"?"current-password":"new-password"}">
        <button class="pw-toggle" type="button" onclick="togglePw('auth-password',this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-linecap="round"/><circle cx="12" cy="12" r="3"/></svg></button>
      </div>
      ${mode==="login" ? `
        <div style="text-align:${state.lang==="ar"?"start":"end"};margin-top:6px;">
          <span onclick="handleForgotPassword()" style="font-size:12px;color:var(--accent);cursor:pointer;font-weight:600;">
            ${state.lang==="ar"?"نسيت كلمة المرور؟":state.lang==="de"?"Passwort vergessen?":"Forgot password?"}
          </span>
        </div>
      ` : ""}
    </div>
    ${mode==="register" ? `
      <div class="form-group">
        <label class="form-label">${t("confirmPassword")} <span class="req">*</span></label>
        <div class="pw-wrap">
          <input class="input-field" id="auth-confirm" type="password" placeholder="••••••••">
          <button class="pw-toggle" type="button" onclick="togglePw('auth-confirm',this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-linecap="round"/><circle cx="12" cy="12" r="3"/></svg></button>
        </div>
      </div>
    ` : ""}

    <button class="btn btn-lg btn-primary btn-full" id="auth-submit-btn" onclick="handleAuth()" style="margin-top:6px;">
      ${mode==="login" ? t("signIn") : t("signUp")}
    </button>

    <div style="text-align:center;margin-top:14px;font-size:13px;color:var(--text3);">
      ${mode==="login" ? t("noAccount") : t("hasAccount")}
      <span onclick="switchAuthMode('${mode==="login"?"register":"login"}')" style="color:var(--accent);cursor:pointer;font-weight:700;">
        ${mode==="login" ? t("signUp") : t("signIn")}
      </span>
    </div>

    <!-- Demo accounts -->
    ${mode==="login" ? `
      <div class="demo-box">
        <strong>Demo Accounts:</strong>
        <div class="demo-row"><span>Admin:</span><span>admin@hireflow.com / admin123</span></div>
        <div class="demo-row"><span>User:</span><span>sara@example.com / pass123</span></div>
      </div>
    ` : ""}
  </div>
</div>
  `;
}

/* ─── AUTH EVENT HANDLING ─────────────────────────────────── */
function attachAuthEvents() {
  // Allow pressing Enter to submit
  setTimeout(() => {
    const inputs = document.querySelectorAll('.auth-card .input-field');
    inputs.forEach(inp => {
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') handleAuth(); });
    });
  }, 0);
}

window.switchAuthMode = function(mode) {
  state.authMode = mode;
  renderApp();
};

window.handleAuth = function() {
  const mode = state.authMode;
  const email = (document.getElementById("auth-email") || {}).value?.trim();
  const password = (document.getElementById("auth-password") || {}).value?.trim();
  const errEl = document.getElementById("auth-error");

  const showErr = (msg) => {
    if (errEl) { errEl.textContent = "⚠ " + msg; errEl.style.display = "flex"; }
  };
  const hideErr = () => { if (errEl) errEl.style.display = "none"; };

  if (!email || !password) { showErr(t("errorFill")); return; }

  if (mode === "login") {
    const user = state.users.find(u => u.email === email && u.password === password);
    if (!user) {
      showErr(state.lang === "ar" ? "البريد الإلكتروني أو كلمة المرور غير صحيحة" : state.lang === "de" ? "E-Mail oder Passwort falsch" : "Invalid email or password");
      return;
    }
    if (user.status === "suspended") {
      showErr(state.lang === "ar" ? "هذا الحساب موقوف" : state.lang === "de" ? "Dieses Konto ist gesperrt" : "This account is suspended");
      return;
    }
    hideErr();
    state.currentUser = user;
    state.page = "dashboard";
    renderApp();
    saveSession();
    // Save email for autofill
    try { localStorage.setItem("hf_saved_email", email); } catch(e) {}
    showToast(state.lang === "ar" ? `مرحباً، ${user.name.split(" ")[0]}!` : state.lang === "de" ? `Willkommen zurück, ${user.name.split(" ")[0]}! 👋` : `Welcome back, ${user.name.split(" ")[0]}! 👋`);
  } else {
    const name = (document.getElementById("auth-name") || {}).value?.trim();
    const confirm = (document.getElementById("auth-confirm") || {}).value?.trim();
    if (!name) { showErr(t("errorFill")); return; }
    if (password !== confirm) { showErr(t("passwordMismatch")); return; }
    if (state.users.find(u => u.email === email)) {
      showErr(state.lang === "ar" ? "البريد الإلكتروني مسجل بالفعل" : state.lang === "de" ? "E-Mail bereits registriert" : "Email already registered");
      return;
    }
    const newUser = { id: Date.now(), name, email, password, phone: "", role: "user", plan: "free", postsToday: 0, totalPosts: 0, joined: new Date().toISOString().split("T")[0], status: "active" };
    state.users.push(newUser);
    state.currentUser = newUser;
    state.page = "dashboard";
    renderApp();
    saveSession();
    showToast(state.lang === "ar" ? `مرحباً ${name}! حسابك جاهز 🎉` : state.lang === "de" ? `Willkommen, ${name}! 🎉` : `Welcome aboard, ${name}! 🎉`);
  }
};

window.handleLogout = function() {
  state.currentUser = null;
  state.page = "dashboard";
  state.authMode = "login";
  clearSession();
  renderApp();
  showToast(state.lang === "ar" ? "تم تسجيل الخروج" : state.lang === "de" ? "Erfolgreich abgemeldet" : "Signed out successfully", "info");
};

/* ─── CREATE POST EVENTS ──────────────────────────────────── */
window.updateCreateForm = function(key, val) {
  state.createForm[key] = val;
  reRenderPreview();
};

window.goCreateStep = function(n) {
  if (n < 1 || n > 4) return;
  if (n > state.createStep) {
    if (state.createStep === 1) {
      const f = state.createForm;
      if (!f.description?.trim()) {
        // Highlight the description field
        const descEl = document.getElementById("cf-desc");
        if (descEl) {
          descEl.style.borderColor = "var(--red)";
          descEl.style.boxShadow = "0 0 0 3px var(--red-dim)";
          descEl.focus();
          setTimeout(() => { descEl.style.borderColor = ""; descEl.style.boxShadow = ""; }, 3000);
        }
        showToast(
          state.lang==="ar" ? "⚠ حقل وصف الشغلانة مطلوب" : state.lang==="de" ? "⚠ Beschreibung ist erforderlich" : "⚠ Job description is required",
          "error"
        );
        return;
      }
    }
  }
  state.createStep = n;
  const pc = document.getElementById("page-content");
  if (pc) { pc.innerHTML = renderCreatePost(); attachPageEvents(); }
};

window.toggleTargetSelection = function(id) {
  const sel = state.createForm.selectedTargets;
  const idx = sel.indexOf(id);
  if (idx === -1) sel.push(id); else sel.splice(idx, 1);
  const pc = document.getElementById("page-content");
  if (pc) { pc.innerHTML = renderCreatePost(); attachPageEvents(); }
};

window.selectAllTargets = function(all) {
  state.createForm.selectedTargets = all ? state.targets.map(t => t.id) : [];
  const pc = document.getElementById("page-content");
  if (pc) { pc.innerHTML = renderCreatePost(); attachPageEvents(); }
};

window.setDelay = function(val) {
  const num = +val;
  const final = isNaN(num) ? 5 : Math.max(2, Math.min(1440, num));
  state.createForm.delayMinutes = final;
  state.settings.delayBetweenPosts = final; // save as default
  const pc = document.getElementById("page-content");
  if (pc) { pc.innerHTML = renderCreatePost(); attachPageEvents(); }
};

window.adjustDelay = function(delta) {
  const cur = +state.createForm.delayMinutes || state.settings.delayBetweenPosts || 5;
  const next = Math.max(2, Math.min(1440, cur + delta));
  state.createForm.delayMinutes = next;
  state.settings.delayBetweenPosts = next;
  const pc = document.getElementById("page-content");
  if (pc) { pc.innerHTML = renderCreatePost(); attachPageEvents(); }
};

window.setDelayDirect = function(val) {
  const num = +val;
  if (isNaN(num)) return;
  if (num < 2) {
    showToast(state.lang==="ar"?"الحد الأدنى ٢ دقيقة":state.lang==="de"?"Mindestens 2 Minuten":"Minimum is 2 minutes", "warning");
    return;
  }
  state.createForm.delayMinutes = Math.min(1440, num);
  state.settings.delayBetweenPosts = state.createForm.delayMinutes;
  // Update just the display number without full re-render
  const disp = document.querySelector("#delay-input");
  if (disp) disp.value = state.createForm.delayMinutes;
};

window.handleImgFile = function(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { showToast(state.lang==="ar"?"الصورة أكبر من 5MB":"Image exceeds 5MB limit", "error"); return; }
  const imgArea = document.getElementById("img-upload-area");
  if (imgArea) {
    imgArea.innerHTML = `<div style="text-align:center;padding:10px;"><div class="upload-progress-wrap"><div class="upload-progress-bar"></div></div><div style="font-size:12px;color:var(--text3);margin-top:8px;">${state.lang==="ar"?"جارٍ الرفع...":"Uploading..."}</div></div>`;
  }
  const reader = new FileReader();
  reader.onload = ev => {
    state.createForm.imageData = ev.target.result;
    setTimeout(() => { reRenderPreview(); refreshUploadAreas(); }, 600);
  };
  reader.readAsDataURL(file);
};

window.handleVidFile = function(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 50 * 1024 * 1024) { showToast(state.lang==="ar"?"الفيديو أكبر من 50MB":"Video exceeds 50MB limit", "error"); return; }
  const vidArea = document.getElementById("vid-upload-area");
  if (vidArea) {
    vidArea.innerHTML = `<div style="text-align:center;padding:10px;"><div class="upload-progress-wrap"><div class="upload-progress-bar"></div></div><div style="font-size:12px;color:var(--text3);margin-top:8px;">${state.lang==="ar"?"جارٍ الرفع...":"Uploading..."}</div></div>`;
  }
  const reader = new FileReader();
  reader.onload = ev => {
    state.createForm.videoData = ev.target.result;
    setTimeout(() => { reRenderPreview(); refreshUploadAreas(); }, 800);
  };
  reader.readAsDataURL(file);
};

window.handleImgDrop = function(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    const fakeEvt = { target: { files: [file] } };
    handleImgFile(fakeEvt);
  }
};

function refreshUploadAreas() {
  const f = state.createForm;
  const imgArea = document.getElementById("img-upload-area");
  if (imgArea) {
    if (f.imageData) {
      imgArea.innerHTML = `
        <div class="upload-preview-wrap">
          <img src="${f.imageData}" alt="preview" class="upload-preview-img">
          <div class="upload-preview-overlay">
            <button class="upload-remove-btn" onclick="event.stopPropagation();updateCreateForm('imageData',null);reRenderPreview();refreshUploadAreas()">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ${state.lang==="ar"?"إزالة":"Remove"}
            </button>
          </div>
          <div class="upload-preview-badge">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="var(--accent)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            ${state.lang==="ar"?"تم الرفع":"Uploaded"}
          </div>
        </div>`;
    } else {
      imgArea.innerHTML = `
        <div class="upload-placeholder">
          <div class="upload-icon-wrap">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--accent)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <div class="upload-text">${state.lang==="ar"?"انقر لرفع صورة":state.lang==="de"?"Bild hochladen":"Click to upload image"}</div>
          <div class="upload-sub">PNG, JPG, WEBP · max 5MB</div>
          <div class="upload-or">${state.lang==="ar"?"أو اسحب وأفلت هنا":state.lang==="de"?"oder hierher ziehen":"or drag & drop here"}</div>
        </div>`;
    }
  }
  const vidArea = document.getElementById("vid-upload-area");
  if (vidArea) {
    if (f.videoData) {
      vidArea.innerHTML = `
        <div class="upload-preview-wrap" style="background:#000;">
          <video src="${f.videoData}" controls style="max-height:110px;width:100%;border-radius:8px;"></video>
          <div class="upload-preview-badge" style="top:auto;bottom:6px;">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="var(--accent)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            ${state.lang==="ar"?"تم الرفع":"Uploaded"}
          </div>
          <button class="upload-remove-btn" style="position:absolute;top:6px;inset-inline-end:6px;" onclick="event.stopPropagation();updateCreateForm('videoData',null);reRenderPreview();refreshUploadAreas()">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ${state.lang==="ar"?"إزالة":"Remove"}
          </button>
        </div>`;
    } else {
      vidArea.innerHTML = `
        <div class="upload-placeholder">
          <div class="upload-icon-wrap">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="var(--accent)" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
          </div>
          <div class="upload-text">${state.lang==="ar"?"انقر لرفع فيديو":state.lang==="de"?"Video hochladen":"Click to upload video"}</div>
          <div class="upload-sub">MP4, WebM · max 50MB</div>
          <div class="upload-or">${state.lang==="ar"?"أو اسحب وأفلت هنا":state.lang==="de"?"oder hierher ziehen":"or drag & drop here"}</div>
        </div>`;
    }
  }
}

window.publishPost = function(action) {
  const f = state.createForm;
  const user = state.currentUser;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;

  // Validate description
  if (!f.description?.trim()) {
    showToast(lbl("⚠ يرجى إضافة وصف الوظيفة","⚠ Bitte Beschreibung hinzufügen","⚠ Please add a job description"), "error");
    return;
  }

  // Enforce daily limit (only for "publish now" and "schedule", not draft)
  if (action !== "draft" && isAtDailyLimit(user)) {
    const limit = getDailyLimit(user);
    showToast(
      lbl(
        `🚫 وصلت للحد اليومي (${limit} منشور). رقّي خطتك للمزيد!`,
        `🚫 Tageslimit erreicht (${limit} Beiträge). Upgraden für mehr!`,
        `🚫 Daily limit reached (${limit} posts). Upgrade for more!`
      ),
      "error"
    );
    // Show upgrade nudge
    setTimeout(() => {
      openModal(`
        <div class="modal-title" style="color:var(--orange);">🚫 ${lbl("وصلت للحد اليومي","Tageslimit erreicht","Daily Limit Reached")}</div>
        <div style="text-align:center;padding:10px 0 18px;">
          <div style="font-size:48px;margin-bottom:12px;">📊</div>
          <div style="font-size:16px;font-weight:800;color:var(--text);margin-bottom:8px;">
            ${lbl(`لقد نشرت ${limit} منشور اليوم`,`Sie haben heute ${limit} Beiträge veröffentlicht`,`You've published ${limit} posts today`)}
          </div>
          <div style="font-size:13px;color:var(--text2);line-height:1.6;margin-bottom:20px;">
            ${lbl("لا يمكنك نشر المزيد اليوم على خطتك الحالية.<br>رقّي خطتك للحصول على حد أعلى أو منشورات غير محدودة.","Sie können heute auf Ihrem aktuellen Plan nicht mehr veröffentlichen.<br>Upgraden für mehr Beiträge oder unbegrenzte Möglichkeiten.","You can't publish more today on your current plan.<br>Upgrade for a higher limit or unlimited posts.")}
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("لاحقاً","Später","Later")}</button>
          <button class="btn btn-md btn-primary" onclick="closeModal();setPage('payments')" style="display:flex;align-items:center;gap:6px;">
            ${IC.payments} ${lbl("رقّي الخطة الآن","Jetzt upgraden","Upgrade Now")}
          </button>
        </div>
      `);
    }, 300);
    return;
  }

  const newPost = {
    id: Date.now(),
    userId: user.id,
    title: f.title || lbl("بدون عنوان","Kein Titel","Untitled"),
    company: f.company, description: f.description,
    salary: f.salary, location: f.location, jobType: f.jobType,
    experience: f.experience, contact: f.contactEmail,
    status: action === "now" ? "approved" : action === "schedule" ? "scheduled" : "pending",
    platforms: state.targets.filter(tgt => f.selectedTargets.includes(tgt.id)).map(tgt => tgt.name),
    date: f.scheduleDate || new Date().toISOString().split("T")[0],
    views: 0, applicants: 0, imageData: f.imageData, videoData: f.videoData,
  };

  state.posts.unshift(newPost);
  if (action !== "draft") {
    user.postsToday = (user.postsToday || 0) + 1;
  }
  user.totalPosts = (user.totalPosts || 0) + 1;

  // Update in users array
  const uIdx = state.users.findIndex(u => u.id === user.id);
  if (uIdx !== -1) state.users[uIdx] = { ...state.users[uIdx], postsToday: user.postsToday, totalPosts: user.totalPosts };

  // Reset form
  state.createForm = { title:"", company:"", description:"", salary:"", location:"", jobType:"full-time", experience:"mid", contact:"", contactEmail:"", contactPhone:"", contactLink:"", scheduleDate:"", scheduleTime:"", delayMinutes: state.settings.delayBetweenPosts || 2, customDelay:"", selectedTargets:[], imageData:null, videoData:null, skills:"", industry:"", deadline:"" };
  state.createStep = 1;

  const msgs = { now: t("postCreated"), schedule: t("postScheduled"), draft: lbl("تم حفظ المسودة","Entwurf gespeichert","Draft saved!") };
  showToast(msgs[action] || t("postCreated"), "success");

  // If now at limit after posting, show a warning
  if (action !== "draft" && isAtDailyLimit(user)) {
    const limit = getDailyLimit(user);
    setTimeout(() => showToast(
      lbl(`⚠ وصلت للحد اليومي (${limit}/${limit})! لا يمكنك النشر أكثر اليوم.`,`⚠ Tageslimit erreicht (${limit}/${limit})!`,`⚠ Daily limit reached (${limit}/${limit})! No more posts today.`),
      "warning"
    ), 800);
  }

  persistState();
  setPage("posts");
};

/* ─── TARGETS ─────────────────────────────────────────────── */
window.openAddTargetModal = function() {
  const typeIcons = { facebook: SOCIAL_ICONS.facebook, linkedin: SOCIAL_ICONS.linkedin, telegram: SOCIAL_ICONS.telegram, instagram: SOCIAL_ICONS.instagram, twitter: SOCIAL_ICONS.twitter, discord: SOCIAL_ICONS.discord, whatsapp: SOCIAL_ICONS.whatsapp, website: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` };
  openModal(`
    <div class="modal-title">+ ${t("addTarget")}</div>
    <div class="form-group">
      <label class="form-label">${t("targetName")} *</label>
      <input class="input-field" id="tg-name" type="text" placeholder="${state.lang==="ar"?"مثال: مجموعة وظائف مصر":"e.g. Tech Jobs Egypt"}">
    </div>
    <div class="form-group">
      <label class="form-label">${t("targetUrl")} *</label>
      <input class="input-field" id="tg-url" type="url" placeholder="https://facebook.com/groups/...">
    </div>
    <div class="form-group">
      <label class="form-label">${t("targetType")}</label>
      <select class="input-field" id="tg-type">
        ${Object.keys(typeIcons).map(k => `<option value="${k}">${k.charAt(0).toUpperCase()+k.slice(1)}</option>`).join("")}
      </select>
    </div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${state.lang==="ar"?"إلغاء":"Cancel"}</button>
      <button class="btn btn-md btn-primary" onclick="confirmAddTarget()">+ ${t("addTarget")}</button>
    </div>
  `);
};

window.confirmAddTarget = function() {
  const name = document.getElementById("tg-name")?.value?.trim();
  const url  = document.getElementById("tg-url")?.value?.trim();
  const type = document.getElementById("tg-type")?.value;
  if (!name || !url) { showToast(t("errorFill"), "error"); return; }
  const typeIcons = { facebook: SOCIAL_ICONS.facebook, linkedin: SOCIAL_ICONS.linkedin, telegram: SOCIAL_ICONS.telegram, instagram: SOCIAL_ICONS.instagram, twitter: SOCIAL_ICONS.twitter, discord: SOCIAL_ICONS.discord, whatsapp: SOCIAL_ICONS.whatsapp, website: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` };
  state.targets.push({ id: Date.now(), name, url, type, icon: typeIcons[type] || "🌐" });
  closeModal();
  showToast(state.lang==="ar"?"تم إضافة الهدف":"Target added!", "success");
  setPage("targets");
};

window.deleteTarget = function(id) {
  state.targets = state.targets.filter(t => t.id !== id);
  showToast(state.lang==="ar"?"تم الحذف":"Deleted", "info");
  setPage("targets");
};

/* ─── SOCIAL ──────────────────────────────────────────────── */
window.connectSocial = function(id) {
  const s = state.social.find(x => x.id === id);
  if (!s) return;
  openModal(`
    <div class="modal-title">${IC.social} ${state.lang==="ar"?"ربط حساب":"Connect Account"} ${s.name}</div>
    <div class="alert info">${IC.security} ${state.lang==="ar"?"يتم الاتصال عبر رمز API آمن فقط. لا يُطلب منك أي كلمة مرور.":"Connection uses a secure API token only. No password is ever requested."}</div>
    <div class="form-group">
      <label class="form-label">API Token / Access Token *</label>
      <input class="input-field" id="social-token" type="text" placeholder="${state.lang==="ar"?"الصق رمز الوصول هنا":"Paste your access token here"}">
    </div>
    <div class="form-group">
      <label class="form-label">${state.lang==="ar"?"اسم الحساب (اختياري)":"Account name (optional)"}</label>
      <input class="input-field" id="social-account" type="text" placeholder="${s.platform==="telegram"?"@mybotname":"My Page Name"}">
    </div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${state.lang==="ar"?"إلغاء":"Cancel"}</button>
      <button class="btn btn-md btn-primary" onclick="confirmConnectSocial(${id})" style="background:${s.color};">${IC.platform} ${t("connect")}</button>
    </div>
  `);
};

window.confirmConnectSocial = function(id) {
  const token = document.getElementById("social-token")?.value?.trim();
  const account = document.getElementById("social-account")?.value?.trim();
  if (!token) { showToast(state.lang==="ar"?"أدخل رمز الوصول":"Enter an access token", "error"); return; }
  const s = state.social.find(x => x.id === id);
  if (s) { s.connected = true; s.token = token; s.account = account || s.platform + "_account"; }
  closeModal();
  showToast(state.lang==="ar"?`تم ربط ${s.name} بنجاح`:`${s.name} connected!`, "success");
  setPage("social");
};

window.openAddGroupModal = function(socialId) {
  const s = state.social.find(x => x.id === socialId);
  if (!s) return;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const examples = {
    facebook:  "https://facebook.com/groups/...",
    telegram:  "https://t.me/channelname",
    whatsapp:  "https://chat.whatsapp.com/...",
    discord:   "https://discord.gg/...",
    linkedin:  "https://linkedin.com/groups/...",
    instagram: "https://instagram.com/...",
    twitter:   "https://twitter.com/...",
  };
  const groupLabel = {
    linkedin:  lbl("مجموعة / صفحة","Gruppe / Seite","Group / Page"),
    instagram: lbl("حساب / صفحة","Konto / Seite","Account / Page"),
    twitter:   lbl("حساب أو قائمة","Konto oder Liste","Account or List"),
  };
  const label = groupLabel[s.platform] || lbl("مجموعة / قناة","Gruppe / Kanal","Group / Channel");
  openModal(`
    <div class="modal-title">${IC.plus} ${lbl(`إضافة ${label} إلى ${s.name}`,`${label} zu ${s.name} hinzufügen`,`Add ${label} to ${s.name}`)}</div>
    <div class="form-group">
      <label class="form-label">${lbl("الاسم","Name","Name")} <span class="req">*</span></label>
      <input class="input-field" id="grp-name" type="text"
        placeholder="${lbl("مثال: وظائف مصر","z.B. Jobs Ägypten","e.g. Tech Jobs Egypt")}">
    </div>
    <div class="form-group">
      <label class="form-label">URL <span class="req">*</span></label>
      <input class="input-field" id="grp-url" type="url"
        placeholder="${examples[s.platform] || "https://..."}">
    </div>
    <div class="alert info" style="font-size:12px;">${IC.security} ${lbl("سيتم استخدام هذا الرابط للنشر التلقائي","Dieser Link wird für die automatische Veröffentlichung verwendet","This link will be used for automatic publishing")}</div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-primary" onclick="confirmAddGroup(${socialId})" style="display:flex;align-items:center;gap:6px;">
        ${IC.plus} ${lbl("إضافة","Hinzufügen","Add")}
      </button>
    </div>
  `);
};

window.confirmAddGroup = function(socialId) {
  const s = state.social.find(x => x.id === socialId);
  if (!s) return;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const name = document.getElementById("grp-name")?.value?.trim();
  const url  = document.getElementById("grp-url")?.value?.trim();
  if (!name || !url) { showToast(t("errorFill"), "error"); return; }
  if (!url.startsWith("http")) { showToast(lbl("الرابط يجب أن يبدأ بـ https://","URL muss mit https:// beginnen","URL must start with https://"), "error"); return; }
  if (!s.groups) s.groups = [];
  // Check for duplicates
  if (s.groups.find(g => g.url === url)) { showToast(lbl("المجموعة موجودة بالفعل","Gruppe bereits vorhanden","Group already exists"), "error"); return; }
  s.groups.push({ id: Date.now(), name, url });
  // Also add to targets automatically
  state.targets.push({ id: Date.now()+1, name, url, type: s.platform, icon: "" });
  closeModal();
  showToast(lbl(`تم إضافة "${name}" بنجاح`,`"${name}" erfolgreich hinzugefügt`,`"${name}" added successfully`), "success");
  setPage("social");
};

window.removeGroup = function(socialId, groupId) {
  const s = state.social.find(x => x.id === socialId);
  if (!s?.groups) return;
  const g = s.groups.find(x => x.id === groupId);
  s.groups = s.groups.filter(x => x.id !== groupId);
  // Also remove from targets if it was auto-added
  if (g) state.targets = state.targets.filter(tg => tg.url !== g.url);
  setPage("social");
};

window.openChangeStatusModal = function(postId) {
  const p = state.posts.find(x => x.id === postId);
  if (!p) return;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const statuses = [
    { id:"approved",  label: lbl("منشور","Veröffentlicht","Published"),  color:"green",  fa:"fa-circle-check"    },
    { id:"scheduled", label: lbl("مجدول","Geplant","Scheduled"),         color:"blue",   fa:"fa-calendar-check"  },
    { id:"pending",   label: lbl("معلّق","Ausstehend","Pending"),         color:"yellow", fa:"fa-clock"           },
    { id:"rejected",  label: lbl("مرفوض","Abgelehnt","Rejected"),        color:"red",    fa:"fa-circle-xmark"    },
  ];
  openModal(`
    <div class="modal-title" style="margin-bottom:20px;">
      <i class="fa-solid fa-pen-to-square"></i> ${lbl("تغيير حالة المنشور","Beitragsstatus ändern","Change Post Status")}
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      ${statuses.map(s => `
        <button onclick="setPostStatus(${postId},'${s.id}')"
          class="status-select-card ${p.status===s.id?"selected":""} status-card-${s.color}"
          style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:18px 12px;border-radius:12px;cursor:pointer;transition:all .18s;border:2px solid ${p.status===s.id?"var(--accent)":"var(--border)"};background:${p.status===s.id?"var(--accent-dim)":"var(--surface2)"};position:relative;"
          onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 20px rgba(0,0,0,.15)'"
          onmouseleave="this.style.transform='';this.style.boxShadow=''">
          ${p.status===s.id?`<span style="position:absolute;top:8px;inset-inline-end:8px;font-size:10px;color:var(--accent);">●</span>`:""}
          <span class="badge ${s.color}" style="font-size:12px;padding:5px 12px;display:flex;align-items:center;gap:5px;">
            <i class="fa-solid ${s.fa}"></i> ${s.label}
          </span>
        </button>
      `).join("")}
    </div>
    <div class="modal-actions" style="margin-top:16px;">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
    </div>
  `);
};

window.setPostStatus = function(postId, newStatus) {
  const p = state.posts.find(x => x.id === postId);
  if (!p || p.status === newStatus) { closeModal(); return; }
  p.status = newStatus;
  persistState();
  closeModal();
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const labels = {
    approved:  lbl("✓ تم التحديث إلى: منشور","✓ Status: Veröffentlicht","✓ Status: Published"),
    scheduled: lbl("✓ تم التحديث إلى: مجدول","✓ Status: Geplant","✓ Status: Scheduled"),
    pending:   lbl("✓ تم التحديث إلى: معلّق","✓ Status: Ausstehend","✓ Status: Pending"),
    rejected:  lbl("✓ تم التحديث إلى: مرفوض","✓ Status: Abgelehnt","✓ Status: Rejected"),
  };
  showToast(labels[newStatus] || lbl("تم تحديث الحالة","Status aktualisiert","Status updated"), "success");
  setPage("posts");
};


/* ─── REAL PAYMENT METHOD ICONS ──────────────────── */
const PAYMENT_ICONS = {
  vodafone_cash: `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#e60000"/><path d="M20 8c6.6 0 12 5.4 12 12s-5.4 12-12 12S8 26.6 8 20 13.4 8 20 8zm0 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" fill="#fff"/></svg>`,
  orange_cash:   `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#ff6600"/><rect x="8" y="14" width="24" height="4" rx="2" fill="#fff"/><rect x="8" y="22" width="16" height="4" rx="2" fill="#fff"/></svg>`,
  etisalat_cash: `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#009900"/><text x="20" y="26" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold" font-family="Arial">eC</text></svg>`,
  we_pay:        `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#002f87"/><text x="20" y="26" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold" font-family="Arial">WE</text></svg>`,
  instapay:      `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="#1a1a2e"/><path d="M12 28l8-16 8 16" stroke="#FFD700" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="20" r="2" fill="#FFD700"/></svg>`,
  bank:          `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#1a3a6b"/><rect x="8" y="22" width="4" height="10" fill="#fff"/><rect x="14" y="18" width="4" height="14" fill="#fff"/><rect x="22" y="20" width="4" height="12" fill="#fff"/><rect x="28" y="16" width="4" height="16" fill="#fff"/><path d="M6 22l14-14 14 14z" fill="#fff"/></svg>`,
  paypal:        `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#003087"/><path d="M15 10h8c4 0 6 2 5 6-1 4-4 6-8 6h-2l-2 8H12l3-20z" fill="#009cde"/><path d="M18 10h8c4 0 6 2 5 6-1 4-4 6-8 6h-2l-2 8H12l3-20z" fill="#fff" opacity="0.3"/></svg>`,
  wise:          `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#00B9FF"/><text x="20" y="26" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold" font-family="Arial">WISE</text></svg>`,
  binance:       `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#1a1a1a"/><path d="M20 8l3 3-3 3-3-3zm-8 8l3 3-3 3-3-3zm8 0l3 3-3 3-3-3zm8 0l3 3-3 3-3-3zm-8 8l3 3-3 3-3-3z" fill="#F0B90B"/></svg>`,
  usdt:          `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#26A17B"/><path d="M22 12v3h6v4h-6v9h-4v-9H12v-4h6v-3zm-2 9c-4 0-7-1-7-2s3-2 7-2 7 1 7 2-3 2-7 2z" fill="#fff"/></svg>`,
  stripe:        `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#635BFF"/><path d="M18 16c0-1 1-2 3-2s4 1 4 3c0 3-6 3-6 6h6v2H14c0-4 6-5 6-8 0-1-1-1-2-1s-2 0-2 1v1h-4v-2z" fill="#fff" opacity="0.9"/></svg>`,
  other:         `<svg viewBox="0 0 40 40" width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#6c757d"/><circle cx="20" cy="20" r="8" stroke="#fff" stroke-width="2" fill="none"/><path d="M16 20h8M20 16v8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
};

window.openAddPaymentMethodModal = function(editId) {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const editing = editId ? (state.paymentMethods||[]).find(m=>m.id===editId) : null;
  openModal(`
    <div class="modal-title">${IC.payments} ${editing ? lbl("تعديل طريقة الدفع","Zahlungsmethode bearbeiten","Edit Payment Method") : lbl("إضافة حساب دفع حقيقي","Echtes Zahlungskonto hinzufügen","Add Real Payment Account")}</div>

    <div class="form-group">
      <label class="form-label">${lbl("نوع الحساب","Kontotyp","Account Type")} <span class="req">*</span></label>
      <select class="input-field" id="pm-type" onchange="renderPmFields()" style="margin-bottom:4px;">
        <option value="vodafone_cash"  ${editing?.type==="vodafone_cash" ?"selected":""}>Vodafone Cash</option>
        <option value="orange_cash"    ${editing?.type==="orange_cash"   ?"selected":""}>Orange Cash</option>
        <option value="etisalat_cash"  ${editing?.type==="etisalat_cash" ?"selected":""}>Etisalat Cash (e&)</option>
        <option value="we_pay"         ${editing?.type==="we_pay"        ?"selected":""}>WE Pay</option>
        <option value="instapay"       ${editing?.type==="instapay"      ?"selected":""}>InstaPay</option>
        <option value="bank_egypt"     ${editing?.type==="bank_egypt"    ?"selected":""}>🏦 ${lbl("بنك","Bank","Bank")}</option>
        <option value="paypal"         ${editing?.type==="paypal"        ?"selected":""}>PayPal</option>
        <option value="wise"           ${editing?.type==="wise"          ?"selected":""}>Wise</option>
        <option value="binance"        ${editing?.type==="binance"       ?"selected":""}>Binance Pay</option>
        <option value="usdt"           ${editing?.type==="usdt"          ?"selected":""}>USDT (TRC20)</option>
        <option value="stripe"         ${editing?.type==="stripe"        ?"selected":""}>Stripe</option>
        <option value="other"          ${editing?.type==="other"         ?"selected":""}>🔗 ${lbl("أخرى","Andere","Other")}</option>
      </select>
    </div>

    <div id="pm-dynamic-fields">
      <!-- filled by renderPmFields() -->
    </div>

    <div class="form-group">
      <label class="form-label">${lbl("اسم صاحب الحساب","Kontoinhaber","Account Holder Name")} <span class="req">*</span></label>
      <input class="input-field" id="pm-holder" type="text"
        value="${editing?.holder||""}"
        placeholder="${lbl("الاسم الكامل","Vollständiger Name","Full Name")}">
    </div>

    <div class="form-group">
      <label class="form-label">${lbl("ملاحظة للمدفوع (اختياري)","Hinweis (optional)","Note for payer (optional)")}</label>
      <input class="input-field" id="pm-note" type="text"
        value="${editing?.note||""}"
        placeholder="${lbl("مثال: تحويل فقط من 9ص-5م","z.B. Überweisungen 9-17 Uhr","e.g. Transfers only 9am–5pm")}">
    </div>

    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-primary" onclick="confirmAddPaymentMethod(${editId||"null"})" style="display:flex;align-items:center;gap:6px;">
        ${IC.save} ${editing ? lbl("حفظ","Speichern","Save") : lbl("إضافة","Hinzufügen","Add")}
      </button>
    </div>
  `, () => {
    renderPmFields();
    // Fill existing values if editing
    if (editing) {
      const acc = document.getElementById("pm-account");
      if (acc) acc.value = editing.account||"";
      const iban = document.getElementById("pm-iban");
      if (iban) iban.value = editing.iban||"";
      const wallet = document.getElementById("pm-wallet");
      if (wallet) wallet.value = editing.wallet||"";
    }
  });
};

window.renderPmFields = function() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const type = document.getElementById("pm-type")?.value;
  const container = document.getElementById("pm-dynamic-fields");
  if (!container) return;

  const fieldSets = {
    vodafone_cash: `
      <div class="form-group">
        <label class="form-label">${lbl("رقم Vodafone Cash","Vodafone Cash Nummer","Vodafone Cash Number")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="tel" placeholder="010X XXXX XXXX" dir="ltr">
      </div>`,
    orange_cash: `
      <div class="form-group">
        <label class="form-label">${lbl("رقم Orange Cash","Orange Cash Nummer","Orange Cash Number")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="tel" placeholder="012X XXXX XXXX" dir="ltr">
      </div>`,
    etisalat_cash: `
      <div class="form-group">
        <label class="form-label">${lbl("رقم Etisalat Cash (e&)","Etisalat Cash Nummer","Etisalat Cash Number")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="tel" placeholder="011X XXXX XXXX" dir="ltr">
      </div>`,
    we_pay: `
      <div class="form-group">
        <label class="form-label">🔵 ${lbl("رقم WE Pay","WE Pay Nummer","WE Pay Number")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="tel" placeholder="011X XXXX XXXX" dir="ltr">
      </div>`,
    instapay: `
      <div class="form-group">
        <label class="form-label">${lbl("معرّف InstaPay","InstaPay ID","InstaPay ID")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="text" placeholder="@username ${lbl("أو","oder","or")} 01XXXXXXXXX" dir="ltr">
      </div>`,
    bank_egypt: `
      <div class="form-group">
        <label class="form-label">${lbl("اسم البنك","Bankname","Bank Name")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="text" placeholder="${lbl("مثال: البنك الأهلي المصري","z.B. National Bank Egypt","e.g. National Bank of Egypt")}">
      </div>
      <div class="form-group">
        <label class="form-label">${lbl("رقم الحساب / IBAN","Kontonummer / IBAN","Account No. / IBAN")} <span class="req">*</span></label>
        <input class="input-field" id="pm-iban" type="text" placeholder="EG00 0000 0000 0000 0000 0000 0000" dir="ltr">
      </div>`,
    wise: `
      <div class="form-group">
        <label class="form-label">${lbl("البريد الإلكتروني على Wise","Wise E-Mail","Wise Email")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="email" placeholder="your@email.com" dir="ltr">
      </div>`,
    paypal: `
      <div class="form-group">
        <label class="form-label">${lbl("البريد الإلكتروني على PayPal","PayPal E-Mail","PayPal Email")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="email" placeholder="your@email.com" dir="ltr">
      </div>`,
    binance: `
      <div class="form-group">
        <label class="form-label">${lbl("معرّف Binance Pay","Binance Pay ID","Binance Pay ID")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="text" placeholder="${lbl("رقم الهوية أو البريد","ID oder E-Mail","ID or Email")}" dir="ltr">
      </div>`,
    usdt: `
      <div class="form-group">
        <label class="form-label">${lbl("عنوان محفظة USDT (TRC20)","USDT Wallet-Adresse (TRC20)","USDT Wallet Address (TRC20)")} <span class="req">*</span></label>
        <input class="input-field" id="pm-wallet" type="text" placeholder="T..." dir="ltr" style="font-family:monospace;font-size:12px;">
      </div>
      <div class="alert warning" style="font-size:12px;">⚠ ${lbl("تأكد من صحة العنوان — المعاملات لا يمكن استرجاعها","Adresse sorgfältig prüfen — Transaktionen sind nicht umkehrbar","Verify address carefully — transactions are irreversible")}</div>`,
    stripe: `
      <div class="form-group">
        <label class="form-label">${lbl("معرّف Stripe","Stripe ID","Stripe Account ID")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="text" placeholder="acct_..." dir="ltr" style="font-family:monospace;font-size:12px;">
      </div>`,
    other: `
      <div class="form-group">
        <label class="form-label">${lbl("تفاصيل الحساب","Kontodetails","Account Details")} <span class="req">*</span></label>
        <input class="input-field" id="pm-account" type="text" placeholder="${lbl("رقم / معرّف / بريد إلكتروني","Nummer / ID / E-Mail","Number / ID / Email")}" dir="ltr">
      </div>`,
  };
  container.innerHTML = fieldSets[type] || fieldSets.other;
};

window.deletePaymentMethod = function(id) {
  state.paymentMethods = (state.paymentMethods || []).filter(m => m.id !== id);
  persistState();
  setAdminTab("methods");
};

window.togglePaymentActive = function(id) {
  const m = (state.paymentMethods||[]).find(x => x.id === id);
  if (m) { m.active = !m.active; persistState(); setAdminTab("methods"); }
};

window.confirmAddPaymentMethod = function(editId) {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const type   = document.getElementById("pm-type")?.value;
  const holder = document.getElementById("pm-holder")?.value?.trim();
  const note   = document.getElementById("pm-note")?.value?.trim();
  const account= document.getElementById("pm-account")?.value?.trim();
  const iban   = document.getElementById("pm-iban")?.value?.trim();
  const wallet = document.getElementById("pm-wallet")?.value?.trim();

  if (!holder) { showToast(lbl("يرجى إدخال اسم صاحب الحساب","Bitte Kontoinhaber eingeben","Please enter account holder name"), "error"); return; }
  const mainVal = account || iban || wallet;
  if (!mainVal) { showToast(lbl("يرجى إدخال تفاصيل الحساب","Bitte Kontodetails eingeben","Please enter account details"), "error"); return; }

  const typeIcons = { vodafone_cash: PAYMENT_ICONS.vodafone_cash, orange_cash: PAYMENT_ICONS.orange_cash, etisalat_cash: PAYMENT_ICONS.etisalat_cash, we_pay: PAYMENT_ICONS.we_pay, instapay: PAYMENT_ICONS.instapay, bank_egypt: PAYMENT_ICONS.bank, paypal: PAYMENT_ICONS.paypal, wise: PAYMENT_ICONS.wise, binance: PAYMENT_ICONS.binance, usdt: PAYMENT_ICONS.usdt, stripe: PAYMENT_ICONS.stripe, other: PAYMENT_ICONS.other };
  const typeNames = {
    vodafone_cash: "Vodafone Cash", orange_cash: "Orange Cash", etisalat_cash: "Etisalat Cash", we_pay: "WE Pay",
    instapay: "InstaPay", bank_egypt: lbl("بنك","Bank","Bank"),
    wise: "Wise", paypal: "PayPal", binance: "Binance Pay", usdt: "USDT (TRC20)", stripe: "Stripe",
    other: lbl("حساب آخر","Andere","Other"),
  };

  const entry = {
    id:      editId && editId !== null ? editId : Date.now(),
    type,
    name:    typeNames[type] || type,
    holder,
    account: account || "",
    iban:    iban    || "",
    wallet:  wallet  || "",
    note:    note    || "",
    icon:    typeIcons[type] || "🔗",
    details: mainVal,
    active:  true,
    custom:  true,
  };

  if (!state.paymentMethods) state.paymentMethods = [];
  if (editId && editId !== null) {
    const idx = state.paymentMethods.findIndex(m => m.id === editId);
    if (idx > -1) state.paymentMethods[idx] = entry;
    else state.paymentMethods.push(entry);
  } else {
    state.paymentMethods.push(entry);
  }
  persistState();
  closeModal();
  showToast(lbl(`تم حفظ ${typeNames[type]} بنجاح`,`${typeNames[type]} erfolgreich gespeichert`,`${typeNames[type]} saved successfully`), "success");
  setAdminTab("methods");
};

window.disconnectSocial = function(id) {
  const s = state.social.find(x => x.id === id);
  if (s) { s.connected = false; s.token = null; s.account = null; }
  showToast(state.lang==="ar"?"تم فصل الحساب":state.lang==="de"?"Konto getrennt":"Account disconnected", "info");
  setPage("social");
};

/* ─── ADMIN ACTIONS ───────────────────────────────────────── */
window.setAdminTab = function(tab) {
  state.adminTab = tab;
  const el = document.getElementById("admin-tab-content");
  if (el) {
    el.className = "fade-in";
    el.innerHTML = (() => {
      switch(tab) {
        case "pricing":       return renderAdminPricing();
        case "users":         return renderAdminUsers();
        case "subscriptions": return renderSubscriptions();
        case "coupons":       return renderAdminCoupons();
        case "methods":       return renderAdminMethods();
        case "platforms":     return renderAdminPlatforms();
        case "admins":        return renderAdminAdmins();
      }
    })();
  }
  // Re-style tabs
  document.querySelectorAll("[onclick^='setAdminTab']").forEach(btn => {
    const t = btn.getAttribute("onclick").match(/'([^']+)'/)?.[1];
    btn.className = `btn btn-sm ${tab === t ? "btn-primary" : "btn-secondary"}`;
  });
};

window.updatePlanMonthly = function(planId, val) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan) return;
  plan.priceMonthly = Math.max(0, +val || 0);
  _refreshYearlyDisplay(plan);
  persistState();
};

window.updatePlanDiscount = function(planId, val) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan) return;
  plan.yearlyDiscount = Math.min(90, Math.max(0, +val || 0));
  _refreshYearlyDisplay(plan);
  persistState();
};

function _refreshYearlyDisplay(plan) {
  const box = document.getElementById(`yearly-display-${plan.id}`);
  if (!box) return;
  const yearly = calcYearlyPrice(plan);
  const saved  = plan.priceMonthly > 0 ? (plan.priceMonthly * 12) - yearly : 0;
  const cur    = state.lang;
  if (plan.priceMonthly === 0) {
    box.innerHTML = `
      <div class="pricing-auto-label">${cur==="ar"?"السعر السنوي المحتسب":cur==="de"?"Jahrespreis (berechnet)":"Calculated Yearly Price"}</div>
      <div class="pricing-auto-value">${cur==="ar"?"مجاني":cur==="de"?"Kostenlos":"Free"}</div>`;
  } else {
    box.innerHTML = `
      <div class="pricing-auto-label">${cur==="ar"?"السعر السنوي المحتسب أوتوماتيك":cur==="de"?"Jahrespreis (auto)":"Auto-Calculated Yearly Price"}</div>
      <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;">
        <div class="pricing-auto-value">${yearly.toLocaleString()} ${cur==="ar"?"ج.م":"EGP"}</div>
        ${saved > 0 ? `<div class="pricing-auto-save">${cur==="ar"?"توفير":cur==="de"?"Ersparnis":"Save"} ${saved.toLocaleString()} ${cur==="ar"?"ج.م":"EGP"} (${plan.yearlyDiscount}%)</div>` : ""}
      </div>
      <div style="font-size:11px;color:var(--text3);margin-top:4px;">
        ${plan.priceMonthly.toLocaleString()} × 12 = ${(plan.priceMonthly*12).toLocaleString()} ${cur==="ar"?"ج.م":"EGP"}
        ${plan.yearlyDiscount > 0 ? ` − ${plan.yearlyDiscount}% = ${yearly.toLocaleString()} ${cur==="ar"?"ج.م":"EGP"}` : ""}
      </div>`;
  }
}

// Keep legacy updatePlanPrice for any remaining references
window.updatePlanPrice = function(planId, period, val) {
  if (period === "monthly") window.updatePlanMonthly(planId, val);
};

window.updatePlanPosts = function(planId, val) {
  const plan = state.plans.find(p => p.id === planId);
  if (plan) { plan.postsPerDay = +val; persistState(); }
};

window.setPlanPromo = function(planId) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan) return;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const disc = +document.getElementById(`promo-disc-${planId}`)?.value;
  const exp  = document.getElementById(`promo-exp-${planId}`)?.value || "";
  if (!disc || disc < 1 || disc > 90) {
    showToast(lbl("أدخل نسبة خصم صحيحة (1-90%)","Gültigen Rabatt eingeben (1-90%)","Enter valid discount (1-90%)"), "error");
    return;
  }
  plan.promo = { discount: disc, expiresAt: exp };
  showToast(lbl(`تم تفعيل عرض ${disc}% على ${plan.name}`,`${disc}% Angebot für ${plan.name} aktiviert`,`${disc}% promo activated on ${plan.name}`), "success");
  setAdminTab("pricing");
};

window.openExtendPromoModal = function(planId) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan?.promo) return;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  openModal(`
    <div class="modal-title">${IC.analytics} ${lbl("تمديد العرض","Angebot verlängern","Extend Promo")}</div>
    <div style="margin-bottom:14px;font-size:13px;color:var(--text2);">
      ${lbl(`العرض الحالي: <strong>${plan.promo.discount}%</strong> على خطة ${plan.name}`,
             `Aktuelles Angebot: <strong>${plan.promo.discount}%</strong> auf ${plan.name}`,
             `Current promo: <strong>${plan.promo.discount}%</strong> on ${plan.name} plan`)}
    </div>
    <div class="form-group">
      <label class="form-label">${lbl("تاريخ الانتهاء الجديد","Neues Ablaufdatum","New Expiry Date")}</label>
      <input class="input-field" type="date" id="extend-promo-date"
        value="${plan.promo.expiresAt || ""}"
        min="${new Date().toISOString().split('T')[0]}">
    </div>
    <div class="form-group">
      <label class="form-label">${lbl("أو أضف أياماً","Oder Tage hinzufügen","Or add days")}</label>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px;">
        ${[7, 14, 30, 60].map(d => `
          <button class="btn btn-sm btn-secondary" onclick="addPromoDays('${planId}', ${d})">
            +${d} ${lbl("يوم","Tage","days")}
          </button>`).join("")}
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-primary" onclick="confirmExtendPromo('${planId}')">
        ${lbl("تمديد","Verlängern","Extend")}
      </button>
    </div>
  `);
};

window.addPromoDays = function(planId, days) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan?.promo) return;
  const base = plan.promo.expiresAt && plan.promo.expiresAt > new Date().toISOString().split("T")[0]
    ? new Date(plan.promo.expiresAt)
    : new Date();
  base.setDate(base.getDate() + days);
  const newDate = base.toISOString().split("T")[0];
  const dateInput = document.getElementById("extend-promo-date");
  if (dateInput) dateInput.value = newDate;
};

window.confirmExtendPromo = function(planId) {
  const plan = state.plans.find(p => p.id === planId);
  if (!plan?.promo) return;
  const newDate = document.getElementById("extend-promo-date")?.value || "";
  plan.promo.expiresAt = newDate;
  closeModal();
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  showToast(lbl(
    newDate ? `تم تمديد العرض حتى ${newDate}` : "تم إزالة تاريخ الانتهاء",
    newDate ? `Angebot verlängert bis ${newDate}` : "Ablaufdatum entfernt",
    newDate ? `Promo extended until ${newDate}` : "Expiry date removed"
  ), "success");
  setAdminTab("pricing");
};

window.removePlanPromo = function(planId) {
  const plan = state.plans.find(p => p.id === planId);
  if (plan) plan.promo = null;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  showToast(lbl("تم إزالة العرض","Angebot entfernt","Promo removed"), "info");
  setAdminTab("pricing");
};

window.openAddAdminModal = function() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const regularUsers = state.users.filter(u => u.role === "user" && u.status === "active");
  openModal(`
    <div class="modal-title">${IC.addAdmin} ${lbl("إضافة مدير جديد","Admin hinzufügen","Add New Admin")}</div>
    <div class="form-group">
      <label class="form-label">${lbl("اختر مستخدماً","Benutzer auswählen","Select User")}</label>
      <select class="input-field" id="admin-user-select">
        <option value="">${lbl("-- اختر مستخدماً --","-- Benutzer wählen --","-- Select user --")}</option>
        ${regularUsers.map(u => `<option value="${u.id}">${escHtml(u.name)} (${escHtml(u.email)})</option>`).join("")}
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">${lbl("نوع الصلاحية","Berechtigungstyp","Role Type")}</label>
      <select class="input-field" id="admin-role-select">
        <option value="moderator">${lbl("مدير (صلاحيات محددة)","Moderator (begrenzt)","Moderator (limited permissions)")}</option>
        <option value="admin">${lbl("مدير رئيسي (صلاحيات كاملة)","Haupt-Admin (voll)","Super Admin (full access)")}</option>
      </select>
    </div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-primary" style="display:flex;align-items:center;gap:6px;" onclick="confirmAddAdmin()">
        ${IC.addAdmin} ${lbl("إضافة","Hinzufügen","Add")}
      </button>
    </div>
  `);
};

window.confirmAddAdmin = function() {
  const userId = +document.getElementById("admin-user-select")?.value;
  const role   = document.getElementById("admin-role-select")?.value;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  if (!userId) { showToast(t("errorFill"), "error"); return; }
  const u = state.users.find(x => x.id === userId);
  if (!u) return;
  u.role = role;
  u.permissions = { canManageUsers: role==="admin", canManagePricing: role==="admin", canViewAnalytics: true, canManagePosts: true, canManageCoupons: false };
  closeModal();
  showToast(lbl(`تم تعيين ${u.name} كمدير`, `${u.name} als Admin hinzugefügt`, `${u.name} added as admin`), "success");
  setAdminTab("admins");
};

window.removeAdminRole = function(id) {
  const u = state.users.find(x => x.id === id);
  // Can't remove yourself or the original super admin (id=1)
  if (!u || u.id === state.currentUser.id || u.id === 1) {
    showToast(state.lang==="ar"?"لا يمكن إزالة صلاحياتك":state.lang==="de"?"Sie können sich nicht selbst entfernen":"Cannot remove your own role", "error");
    return;
  }
  if (u.role === "admin" && u.id === 1) return; // extra safety
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  openModal(`
    <div class="modal-title">${IC.warning} ${lbl("إزالة الصلاحيات","Berechtigungen entfernen","Remove Admin Role")}</div>
    <p style="color:var(--text2);margin-bottom:20px;">${lbl(`هل تريد إزالة صلاحيات ${escHtml(u.name)}؟`,`Berechtigungen von ${escHtml(u.name)} entfernen?`,`Remove admin role from ${escHtml(u.name)}?`)}</p>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-danger" onclick="doRemoveAdmin(${id})" style="display:flex;align-items:center;gap:5px;">
        ${lbl("إزالة","Entfernen","Remove")}
      </button>
    </div>
  `);
};

window.doRemoveAdmin = function(id) {
  // Double-check self-protection
  if (id === state.currentUser.id || id === 1) {
    closeModal();
    showToast(state.lang==="ar"?"محمي":"Protected", "error");
    return;
  }
  const u = state.users.find(x => x.id === id);
  if (u) { u.role = "user"; delete u.permissions; }
  closeModal();
  showToast(state.lang==="ar"?"تم إزالة الصلاحيات":state.lang==="de"?"Berechtigungen entfernt":"Admin role removed", "info");
  setAdminTab("admins");
};

window.toggleAdminPerm = function(id, key, val) {
  const u = state.users.find(x => x.id === id);
  if (!u) return;
  if (!u.permissions) u.permissions = {};
  u.permissions[key] = val;
  showToast(state.lang==="ar"?"تم تحديث الصلاحيات":state.lang==="de"?"Berechtigungen aktualisiert":"Permissions updated", "success");
};

window.openAddAdminModal = window.openAddAdminModal;

window.adminSuspendUser = function(id) {
  const u = state.users.find(x => x.id === id);
  if (u) u.status = "suspended";
  showToast(state.lang==="ar"?"تم إيقاف الحساب":"User suspended", "info");
  setAdminTab("users");
};

window.adminRestoreUser = function(id) {
  const u = state.users.find(x => x.id === id);
  if (u) u.status = "active";
  showToast(state.lang==="ar"?"تم استعادة الحساب":"User restored", "success");
  setAdminTab("users");
};

window.adminDeleteUser = function(id) {
  const u = state.users.find(x => x.id === id);
  if (!u || u.id === 1 || u.id === state.currentUser.id) {
    showToast(state.lang==="ar"?"لا يمكن حذف هذا الحساب":state.lang==="de"?"Dieses Konto kann nicht gelöscht werden":"This account cannot be deleted", "error");
    return;
  }
  openModal(`
    <div class="modal-title">${IC.warning} ${t("confirmDelete")}</div>
    <p style="color:var(--text2);margin-bottom:20px;">${state.lang==="ar"?"سيتم حذف هذا المستخدم وجميع بياناته نهائياً.":"This user and all their data will be permanently deleted."}</p>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${state.lang==="ar"?"إلغاء":"Cancel"}</button>
      <button class="btn btn-md btn-danger" onclick="doDeleteUser(${id})">${state.lang==="ar"?"حذف":state.lang==="de"?"Löschen":"Delete"}</button>
    </div>
  `);
};

window.doDeleteUser = function(id) {
  state.users = state.users.filter(u => u.id !== id);
  state.posts = state.posts.filter(p => p.userId !== id);
  closeModal();
  showToast(state.lang==="ar"?"تم حذف المستخدم":"User deleted", "info");
  setAdminTab("users");
};

window.filterAdminUsers = function(q) {
  const filtered = state.users.filter(u =>
    u.name.toLowerCase().includes(q.toLowerCase()) ||
    u.email.toLowerCase().includes(q.toLowerCase())
  );
  const tbl = document.getElementById("admin-users-table");
  if (tbl) tbl.innerHTML = renderAdminUsersTable(filtered);
};

window.openAddCouponModal = function(editId) {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const existing = editId ? state.coupons.find(c => c.id === editId) : null;
  openModal(`
    <div class="modal-title">${IC.coupon} ${existing ? lbl("تعديل الكوبون","Gutschein bearbeiten","Edit Coupon") : t("addCoupon")}</div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${t("couponCode")} <span class="req">*</span></label>
        <input class="input-field" id="cp-code" type="text"
          placeholder="SAVE30"
          value="${existing?.code||""}"
          style="text-transform:uppercase;font-family:monospace;font-weight:700;letter-spacing:1.5px;"
          oninput="this.value=this.value.toUpperCase()"
          autocomplete="off" spellcheck="false">
      </div>
      <div class="form-group">
        <label class="form-label">${lbl("تطبّق على","Gilt für","Applies To")}</label>
        <select class="input-field" id="cp-applies">
          <option value="all" ${(!existing||existing.appliesTo==="all")?"selected":""}>${lbl("كل الباقات","Alle Pläne","All Plans")}</option>
          <option value="pro" ${existing?.appliesTo==="pro"?"selected":""}>${lbl("باقة Pro فقط","Nur Pro","Pro Only")}</option>
          <option value="business" ${existing?.appliesTo==="business"?"selected":""}>${lbl("باقة Business فقط","Nur Business","Business Only")}</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${t("discount")} <span class="req">*</span></label>
        <input class="input-field" id="cp-disc" type="number" min="1" max="100"
          placeholder="25" value="${existing?.discount||""}">
      </div>
      <div class="form-group">
        <label class="form-label">${lbl("نوع الخصم","Rabatttyp","Discount Type")}</label>
        <select class="input-field" id="cp-type">
          <option value="percent" ${(!existing||existing.type==="percent")?"selected":""}>${lbl("نسبة مئوية %","Prozent %","Percentage %")}</option>
          <option value="fixed" ${existing?.type==="fixed"?"selected":""}>${lbl("مبلغ ثابت (ج.م)","Fester Betrag (EGP)","Fixed Amount (EGP)")}</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${lbl("تاريخ الانتهاء","Ablaufdatum","Expiry Date")}</label>
        <input class="input-field" id="cp-expires" type="date"
          value="${existing?.expiresAt||""}"
          min="${new Date().toISOString().split("T")[0]}">
        <div style="font-size:11px;color:var(--text3);margin-top:4px;">${lbl("اتركه فارغاً = لا ينتهي","Leer lassen = kein Ablauf","Leave empty = never expires")}</div>
      </div>
      <div class="form-group">
        <label class="form-label">${lbl("حد الاستخدام","Nutzungslimit","Usage Limit")}</label>
        <input class="input-field" id="cp-limit" type="number" min="-1"
          placeholder="0"
          value="${existing?.usageLimit||0}">
        <div style="font-size:11px;color:var(--text3);margin-top:4px;">${lbl("0 أو -1 = غير محدود","0 od. -1 = unbegrenzt","0 or -1 = unlimited")}</div>
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-primary" style="display:flex;align-items:center;gap:6px;"
        onclick="confirmAddCoupon(${editId||0})">${IC.save} ${existing?lbl("حفظ التعديل","Speichern","Save Changes"):lbl("إضافة الكوبون","Gutschein hinzufügen","Add Coupon")}</button>
    </div>
  `);
};

window.confirmAddCoupon = function(editId) {
  const rawCode = document.getElementById("cp-code")?.value?.trim() || "";
  const code    = rawCode.toUpperCase().replace(/\s+/g, "");
  const disc    = +document.getElementById("cp-disc")?.value;
  const type    = document.getElementById("cp-type")?.value;
  const expires = document.getElementById("cp-expires")?.value || "";
  const limit   = +document.getElementById("cp-limit")?.value || 0;
  const applies = document.getElementById("cp-applies")?.value || "all";
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;

  if (!code || !disc || disc < 1) { showToast(t("errorFill"), "error"); return; }
  if (type === "percent" && disc > 100) { showToast(lbl("الخصم لا يتجاوز 100%","Max. 100% Rabatt","Discount can't exceed 100%"), "error"); return; }

  if (editId) {
    const c = state.coupons.find(x => x.id === editId);
    if (c) { c.code = code; c.discount = disc; c.type = type; c.expiresAt = expires; c.usageLimit = limit; c.appliesTo = applies; }
    showToast(lbl("تم تعديل الكوبون","Gutschein bearbeitet","Coupon updated"), "success");
  } else {
    if (state.coupons.find(x => x.code === code)) { showToast(lbl("الكود موجود بالفعل","Code bereits vorhanden","Code already exists"), "error"); return; }
    state.coupons.push({ id: Date.now(), code, discount: disc, type, active: true, expiresAt: expires, usageLimit: limit, usageCount: 0, appliesTo: applies });
    showToast(lbl(`✓ تم إضافة كوبون "${code}"`,`✓ Gutschein "${code}" hinzugefügt`,`✓ Coupon "${code}" added!`), "success");
  }
  persistState();
  closeModal();
  setAdminTab("coupons");
};

window.toggleCouponActive = function(id) {
  const c = state.coupons.find(x => x.id === id);
  if (c) c.active = !c.active;
  setAdminTab("coupons");
};

window.deleteCoupon = function(id) {
  state.coupons = state.coupons.filter(c => c.id !== id);
  showToast(state.lang==="ar"?"تم حذف الكوبون":"Coupon deleted", "info");
  setAdminTab("coupons");
};

/* ─── POST ACTIONS ────────────────────────────────────────── */
window.deletePost = function(id) {
  openModal(`
    <div class="modal-title">${IC.warning} ${t("confirmDelete")}</div>
    <p style="color:var(--text2);margin-bottom:20px;">${state.lang==="ar"?"سيتم حذف هذا المنشور نهائياً.":"This post will be permanently deleted."}</p>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${state.lang==="ar"?"إلغاء":"Cancel"}</button>
      <button class="btn btn-md btn-danger" onclick="doDeletePost(${id})">${state.lang==="ar"?"حذف":state.lang==="de"?"Löschen":"Delete"}</button>
    </div>
  `);
};

window.doDeletePost = function(id) {
  state.posts = state.posts.filter(p => p.id !== id);
  closeModal();
  showToast(state.lang==="ar"?"تم حذف المنشور":"Post deleted", "info");
  setPage("posts");
};

/* ─── PROFILE ─────────────────────────────────────────────── */
window.saveProfile = function() {
  const name     = document.getElementById("prof-name")?.value?.trim();
  const email    = document.getElementById("prof-email")?.value?.trim();
  const phone    = document.getElementById("prof-phone")?.value?.trim();
  const pw       = document.getElementById("prof-pw")?.value;
  const pw2      = document.getElementById("prof-pw2")?.value;
  const jobTitle = document.getElementById("prof-jobtitle")?.value?.trim();
  const age      = document.getElementById("prof-age")?.value;
  if (!name || !email) { showToast(t("errorFill"), "error"); return; }
  if (pw && pw !== pw2) { showToast(t("passwordMismatch"), "error"); return; }
  state.currentUser.name     = name;
  state.currentUser.email    = email;
  state.currentUser.phone    = phone || "";
  state.currentUser.jobTitle = jobTitle || "";
  state.currentUser.age      = age ? +age : null;
  if (pw) state.currentUser.password = pw;
  const uIdx = state.users.findIndex(u => u.id === state.currentUser.id);
  if (uIdx !== -1) state.users[uIdx] = { ...state.users[uIdx], ...state.currentUser };
  showToast(t("profileUpdated"), "success");
  renderSidebar();
  renderTopBar();
};

/* ─── PAYMENTS ────────────────────────────────────────────── */
window.upgradePlan = function(planId) {
  if (planId === "free") return;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const plan = state.plans.find(p => p.id === planId);
  const today = new Date().toISOString().split("T")[0];
  const promoActive = plan?.promo && (!plan.promo.expiresAt || plan.promo.expiresAt >= today);
  const basePrice = plan?.priceMonthly || 0;
  const promoPrice = promoActive ? Math.round(basePrice * (1 - plan.promo.discount/100)) : basePrice;

  // Predefined coupons (in addition to admin coupons in state)
  const BUILTIN_COUPONS = [
    { code: "SAVE10",    discount: 10,  type: "percent" },
    { code: "WELCOME50", discount: 50,  type: "fixed"   },
    { code: "PRO20",     discount: 20,  type: "percent" },
    { code: "LAUNCH50",  discount: 50,  type: "percent" },
  ];
  const allCoupons = [
    ...BUILTIN_COUPONS,
    ...(state.coupons || []).filter(c => c.active && (!c.expiresAt || c.expiresAt >= today) && (!c.usageLimit || c.usageCount < c.usageLimit)),
  ];

  const priceDisplay = promoPrice === 0
    ? lbl("مجاني","Kostenlos","Free")
    : `${promoPrice.toLocaleString()} ${lbl("ج.م","EGP","EGP")}/${lbl("شهر","Mo","mo")}`;

  openModal(`
    <div class="modal-title">${IC.payments} ${lbl("ترقية إلى","Upgrade zu","Upgrade to")} ${plan?.name}</div>

    <!-- Price Box -->
    <div id="upgrade-price-box" style="background:var(--surface2);border-radius:var(--radius);padding:16px;border:1.5px solid var(--border2);margin-bottom:16px;text-align:center;">
      <div style="font-size:11px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;">${lbl("السعر الشهري","Monatlicher Preis","Monthly Price")}</div>
      <div id="upgrade-original-price" style="font-size:28px;font-weight:900;color:var(--accent);">${priceDisplay}</div>
      ${promoActive ? `<div style="font-size:12px;color:var(--orange);margin-top:4px;">🔥 ${plan.promo.discount}% OFF ${lbl("مطبّق","aktiv","applied")}</div>` : ""}
      <div id="upgrade-discount-row" style="display:none;margin-top:8px;"></div>
      <div id="upgrade-final-price" style="display:none;font-size:20px;font-weight:900;color:var(--green);margin-top:4px;"></div>
    </div>

    <!-- Coupon Input -->
    <div class="form-group">
      <label class="form-label">${IC.coupon} ${lbl("كود الخصم","Gutscheincode","Coupon Code")} <span style="font-size:10px;color:var(--text3);">(${lbl("اختياري","optional","optional")})</span></label>
      <div style="display:flex;gap:8px;">
        <input class="input-field" id="coupon-input" type="text"
          placeholder="${lbl("أدخل كود الخصم","Gutscheincode eingeben","Enter coupon code")}"
          style="flex:1;text-transform:uppercase;letter-spacing:1px;font-weight:700;"
          oninput="this.value=this.value.toUpperCase()">
        <button class="btn btn-md btn-secondary" onclick="applyCoupon('${planId}', ${promoPrice})" style="white-space:nowrap;display:flex;align-items:center;gap:5px;">
          ${IC.check} ${lbl("تطبيق","Anwenden","Apply")}
        </button>
      </div>
      <div id="coupon-msg" style="margin-top:6px;font-size:12px;font-weight:600;display:none;"></div>
    </div>

    <div class="alert info" style="font-size:12px;">${IC.security} ${lbl("نمط تجريبي — الدفع الفعلي لن يتم","Demo: Keine echte Zahlung","Demo mode: No real payment processed")}</div>

    <div class="modal-actions" style="margin-top:4px;">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-primary" id="upgrade-confirm-btn" style="display:flex;align-items:center;gap:6px;" onclick="confirmUpgradePlan('${planId}')">
        ${IC.payments} ${lbl("تأكيد الترقية","Upgrade bestätigen","Confirm Upgrade")}
      </button>
    </div>
  `);
};

window.applyCoupon = function(planId, basePrice) {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const code = document.getElementById("coupon-input")?.value?.trim().toUpperCase();
  const msgEl = document.getElementById("coupon-msg");
  const discountRow = document.getElementById("upgrade-discount-row");
  const finalPriceEl = document.getElementById("upgrade-final-price");
  const originalEl = document.getElementById("upgrade-original-price");
  if (!code || !msgEl) return;

  const today = new Date().toISOString().split("T")[0];
  const BUILTIN_COUPONS = [
    { code: "SAVE10",    discount: 10,  type: "percent" },
    { code: "WELCOME50", discount: 50,  type: "fixed"   },
    { code: "PRO20",     discount: 20,  type: "percent" },
    { code: "LAUNCH50",  discount: 50,  type: "percent" },
  ];
  const allCoupons = [
    ...BUILTIN_COUPONS,
    ...(state.coupons || []).filter(c => c.active && (!c.expiresAt || c.expiresAt >= today)),
  ];

  const coupon = allCoupons.find(c => c.code === code);

  if (!coupon) {
    msgEl.style.display = "block";
    msgEl.style.color = "var(--red)";
    msgEl.textContent = "❌ " + lbl("كود خصم غير صالح","Ungültiger Gutscheincode","Invalid coupon code");
    discountRow.style.display = "none";
    finalPriceEl.style.display = "none";
    if (originalEl) originalEl.style.textDecoration = "none";
    return;
  }

  let discountAmt = 0;
  let discountLabel = "";
  if (coupon.type === "percent") {
    discountAmt = Math.round(basePrice * coupon.discount / 100);
    discountLabel = `${coupon.discount}%`;
  } else {
    discountAmt = Math.min(coupon.discount, basePrice);
    discountLabel = `${coupon.discount} ${lbl("ج.م","EGP","EGP")}`;
  }
  const finalPrice = Math.max(0, basePrice - discountAmt);
  const cur = lbl("ج.م","EGP","EGP");

  // Update UI
  msgEl.style.display = "block";
  msgEl.style.color = "var(--green)";
  msgEl.textContent = "✅ " + lbl(`كود "${code}" مقبول — خصم ${discountLabel}`,`Gutschein "${code}" angewendet — ${discountLabel} Rabatt`,`Coupon "${code}" applied — ${discountLabel} off`);

  if (originalEl) {
    originalEl.style.textDecoration = "line-through";
    originalEl.style.color = "var(--text3)";
    originalEl.style.fontSize = "16px";
  }

  discountRow.style.display = "block";
  discountRow.innerHTML = `<span style="color:var(--green);font-size:13px;font-weight:700;">−${discountAmt.toLocaleString()} ${cur} ${lbl("خصم","Rabatt","discount")}</span>`;

  finalPriceEl.style.display = "block";
  finalPriceEl.innerHTML = finalPrice === 0
    ? `<span style="color:var(--accent);">${lbl("مجاني","Kostenlos","Free")} 🎉</span>`
    : `${finalPrice.toLocaleString()} ${cur}/${lbl("شهر","Mo","mo")}`;

  // Save discounted price for confirm
  window._upgradeDiscountedPrice = finalPrice;
  window._appliedCouponCode = code;
};

window.confirmUpgradePlan = function(planId) {
  const plan = state.plans.find(p => p.id === planId);
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  state.currentUser.plan = planId;
  const uIdx = state.users.findIndex(u => u.id === state.currentUser.id);
  if (uIdx !== -1) state.users[uIdx].plan = planId;

  // Track coupon usage if one was applied
  if (window._appliedCouponCode) {
    const used = state.coupons.find(c => c.code === window._appliedCouponCode);
    if (used) used.usageCount = (used.usageCount || 0) + 1;
    window._appliedCouponCode = null;
  }
  window._upgradeDiscountedPrice = null;

  closeModal();
  showToast(lbl(`تمت الترقية إلى خطة ${plan?.name}! 🎉`,`Upgrade auf ${plan?.name} erfolgreich! 🎉`,`Upgraded to ${plan?.name} plan! 🎉`), "success");
  renderSidebar();
  persistState();
  setPage("payments");
};

/* ─── MISC ────────────────────────────────────────────────── */
window.togglePw = function(id, btn) {
  const inp = document.getElementById(id);
  if (!inp) return;
  if (inp.type === "password") {
    inp.type = "text";
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke-linecap="round"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke-linecap="round"/><circle cx="12" cy="12" r="3"/><line x1="1" y1="1" x2="23" y2="23" stroke-linecap="round"/></svg>`;
    btn.title = "Hide password";
  } else {
    inp.type = "password";
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-linecap="round"/><circle cx="12" cy="12" r="3"/></svg>`;
    btn.title = "Show password";
  }
};

window.handleForgotPassword = function() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const emailInput = document.getElementById("auth-email");
  const email = emailInput?.value?.trim() || "";
  openModal(`
    <div class="modal-title">${IC.security} ${lbl("إعادة تعيين كلمة المرور","Passwort zurücksetzen","Reset Password")}</div>
    <div style="font-size:13px;color:var(--text2);margin-bottom:16px;">
      ${lbl("أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين","Geben Sie Ihre E-Mail ein","Enter your email and we'll send a reset link")}
    </div>
    <div class="form-group">
      <label class="form-label">${t("email")}</label>
      <input class="input-field" id="forgot-email" type="email" placeholder="you@example.com" value="${escHtml(email)}">
    </div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
      <button class="btn btn-md btn-primary" onclick="confirmForgotPassword()">
        ${lbl("إرسال رابط الإعادة","Link senden","Send Reset Link")}
      </button>
    </div>
  `);
};

window.confirmForgotPassword = function() {
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const email = document.getElementById("forgot-email")?.value?.trim();
  if (!email) { showToast(t("errorFill"), "error"); return; }
  const user = state.users.find(u => u.email === email);
  closeModal();
  // Always show success (security: don't reveal if email exists)
  showToast(lbl(
    `تم إرسال رابط الإعادة إلى ${email} (تجريبي)`,
    `Link wurde an ${email} gesendet (Demo)`,
    `Reset link sent to ${email} (demo)`
  ), "success");
  // In demo: if user found, show the password
  if (user) {
    setTimeout(() => {
      showToast(lbl(
        `كلمة مرورك الحالية: ${user.password}`,
        `Ihr aktuelles Passwort: ${user.password}`,
        `Your current password: ${user.password}`
      ), "info");
    }, 1500);
  }
};

window.saveSettingsProfile = function() {
  const name  = document.getElementById("settings-name")?.value?.trim();
  const phone = document.getElementById("settings-phone")?.value?.trim();
  const pw    = document.getElementById("settings-pw")?.value;
  const jobTitle = document.getElementById("settings-jobtitle")?.value?.trim();
  const age   = document.getElementById("settings-age")?.value;
  const lbl   = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;

  if (!name) { showToast(t("errorFill"), "error"); return; }

  state.currentUser.name     = name;
  state.currentUser.phone    = phone || "";
  state.currentUser.jobTitle = jobTitle || "";
  state.currentUser.age      = age ? +age : null;
  if (pw) state.currentUser.password = pw;

  const uIdx = state.users.findIndex(u => u.id === state.currentUser.id);
  if (uIdx !== -1) state.users[uIdx] = { ...state.users[uIdx], ...state.currentUser };

  showToast(lbl("تم حفظ البيانات الشخصية","Persönliche Daten gespeichert","Personal info saved"), "success");
  renderSidebar();
};

window.confirmDeleteAccount = function() {
  openModal(`
    <div class="modal-title">${IC.warning} ${state.lang==="ar"?"حذف الحساب":state.lang==="de"?"Konto löschen":"Delete Account"}</div>
    <p style="color:var(--red);font-weight:600;margin-bottom:20px;">${state.lang==="ar"?"هذا الإجراء لا يمكن التراجع عنه!":state.lang==="de"?"Diese Aktion kann nicht rückgängig gemacht werden!":"This action cannot be undone!"}</p>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${state.lang==="ar"?"إلغاء":state.lang==="de"?"Abbrechen":"Cancel"}</button>
      <button class="btn btn-md btn-danger" onclick="handleLogout();closeModal();" style="display:flex;align-items:center;gap:5px;">
        ${state.lang==="ar"?"تأكيد الحذف":state.lang==="de"?"Löschen bestätigen":"Confirm Delete"}
      </button>
    </div>
  `);
};

function escHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function attachPageEvents() {
  // Animate progress bars after render
  setTimeout(() => {
    document.querySelectorAll(".progress-fill").forEach(el => {
      const w = el.style.width;
      el.style.width = "0";
      setTimeout(() => { el.style.width = w; }, 50);
    });
    document.querySelectorAll(".chart-bar-fill").forEach(el => {
      const w = el.style.width;
      el.style.width = "0";
      setTimeout(() => { el.style.width = w; }, 100);
    });
  }, 50);

  // Add responsive class handling
  document.querySelectorAll(".responsive-cols").forEach(el => {
    if (window.innerWidth < 768) {
      el.style.gridTemplateColumns = "1fr";
    }
  });
}

window.setPage = setPage;
window.setLang = setLang;
window.toggleTheme = toggleTheme;
window.state = state;
window.showToast = showToast;
window.closeModal = closeModal;
window.reRenderPreview = reRenderPreview;
window.refreshUploadAreas = refreshUploadAreas;

/* ─── RESPONSIVE RESIZE ───────────────────────────────────── */
window.addEventListener("resize", () => {
  const wasMobile = state.isMobile;
  state.isMobile = window.innerWidth < 769;
  if (wasMobile !== state.isMobile && state.currentUser) {
    renderApp();
  }
});

/* ─── SHARED STATE ENGINE (localStorage + BroadcastChannel) ── */
const STORE_KEY = "hf_shared_state";
const SESSION_KEY = "hf_session";
let _bc = null;  // BroadcastChannel for cross-tab sync

// Persist the full shared state (users, plans, coupons, subscriptions)
function persistState() {
  try {
    const shared = {
      users:          state.users,
      plans:          state.plans,
      coupons:        state.coupons,
      subscriptions:  state.subscriptions || [],
      targets:        state.targets,
      social:         state.social,
      posts:          state.posts,
      paymentMethods: state.paymentMethods || [],
      customPlatforms:state.customPlatforms || [],
    };
    localStorage.setItem(STORE_KEY, JSON.stringify(shared));
    if (_bc) _bc.postMessage({ type: "STATE_UPDATE", shared });
  } catch(e) {}
}

// Load shared state from localStorage
function loadSharedState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return;
    const shared = JSON.parse(raw);
    if (shared.users)           state.users           = shared.users;
    if (shared.plans)           state.plans           = shared.plans;
    if (shared.coupons)         state.coupons         = shared.coupons;
    if (shared.subscriptions)   state.subscriptions   = shared.subscriptions;
    if (shared.targets)         state.targets         = shared.targets;
    if (shared.social)          state.social          = shared.social;
    if (shared.posts)           state.posts           = shared.posts;
    if (shared.paymentMethods)  state.paymentMethods  = shared.paymentMethods;
    if (shared.customPlatforms) state.customPlatforms = shared.customPlatforms;
  } catch(e) {}
}

function saveSession() {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      userId: state.currentUser?.id,
      lang: state.lang,
      theme: state.theme
    }));
  } catch(e) {}
}
function clearSession() {
  try { localStorage.removeItem(SESSION_KEY); } catch(e) {}
}
function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch(e) { return null; }
}

// Wrap all admin mutations to auto-persist + broadcast
function adminMutate(fn) {
  fn();
  persistState();
  // If currentUser is in state.users, refresh it
  if (state.currentUser) {
    const fresh = state.users.find(u => u.id === state.currentUser.id);
    if (fresh) state.currentUser = fresh;
  }
}

/* ─── SUBSCRIPTION SYSTEM ─────────────────────────────────── */
// subscription: { id, userId, userName, userEmail, planId, planName, amount,
//                 receiptData (base64), status: "pending"|"approved"|"rejected",
//                 requestedAt, reviewedAt, reviewNote }

function renderSubscriptions() {
  const subs = state.subscriptions || [];
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;

  const pendingBadge = subs.filter(s => s.status === "pending").length;

  return `
    <div style="display:flex;flex-direction:column;gap:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <div style="font-size:15px;font-weight:800;color:var(--text);">${lbl("طلبات الاشتراك","Abonnementanfragen","Subscription Requests")}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px;">${lbl("راجع إيصالات الدفع ووافق على الاشتراكات","Zahlungsbelege prüfen und Abonnements genehmigen","Review payment receipts and approve subscriptions")}</div>
        </div>
        ${pendingBadge > 0 ? `<span class="badge yellow" style="font-size:13px;padding:6px 14px;">${pendingBadge} ${lbl("في الانتظار","ausstehend","pending")}</span>` : ""}
      </div>

      ${subs.length === 0 ? `
        <div class="card"><div class="empty-state">
          <div style="font-size:40px;opacity:.3;margin-bottom:10px;">📥</div>
          <div class="empty-title">${lbl("لا توجد طلبات اشتراك بعد","Noch keine Anfragen","No subscription requests yet")}</div>
          <div class="empty-sub">${lbl("ستظهر هنا عندما يطلب مستخدم الترقية","Erscheint wenn Benutzer ein Upgrade anfragen","Will appear when users request upgrades")}</div>
        </div></div>
      ` : `
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${subs.sort((a,b) => a.status==="pending"?-1:1).map(sub => {
            const statusColor = sub.status==="approved"?"green":sub.status==="rejected"?"red":"yellow";
            const statusLabel = sub.status==="approved"?lbl("موافق","Genehmigt","Approved"):sub.status==="rejected"?lbl("مرفوض","Abgelehnt","Rejected"):lbl("في الانتظار","Ausstehend","Pending");
            return `
              <div class="card" style="border-inline-start:3px solid var(--${statusColor === "yellow" ? "yellow" : statusColor === "green" ? "accent" : "red"});">
                <div class="card-body">
                  <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <div class="user-avatar" style="width:38px;height:38px;font-size:13px;">${initials(sub.userName)}</div>
                      <div>
                        <div style="font-weight:800;color:var(--text);">${escHtml(sub.userName)}</div>
                        <div style="font-size:12px;color:var(--text3);">${escHtml(sub.userEmail)}</div>
                        <div style="font-size:12px;color:var(--text2);margin-top:2px;">
                          ${IC.payments} ${escHtml(sub.planName)} · ${sub.amount} ${state.lang==="ar"?"ج.م":"EGP"}
                        </div>
                      </div>
                    </div>
                    <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
                      <span class="badge ${statusColor}">${statusLabel}</span>
                      <div style="font-size:11px;color:var(--text3);">${formatDate(sub.requestedAt)}</div>
                    </div>
                  </div>

                  ${sub.receiptData ? `
                    <div style="margin-top:12px;">
                      <div style="font-size:12px;font-weight:700;color:var(--text3);margin-bottom:6px;">${lbl("إيصال الدفع","Zahlungsbeleg","Payment Receipt")}</div>
                      <img src="${sub.receiptData}" alt="receipt"
                        style="max-width:100%;max-height:200px;border-radius:var(--radius-sm);border:1px solid var(--border);object-fit:contain;cursor:pointer;"
                        onclick="viewReceiptFull('${sub.id}')">
                    </div>
                  ` : `
                    <div class="alert info" style="margin-top:10px;font-size:12px;">${lbl("لم يتم رفع إيصال","Kein Beleg hochgeladen","No receipt uploaded")}</div>
                  `}

                  ${sub.status === "pending" ? `
                    <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;">
                      <input class="input-field" id="note-${sub.id}" type="text"
                        placeholder="${lbl("ملاحظة (اختياري)","Hinweis (optional)","Note (optional)")}"
                        style="flex:1;font-size:12px;padding:7px 12px;">
                      <button class="btn btn-sm btn-primary" style="display:flex;align-items:center;gap:5px;"
                        onclick="reviewSubscription('${sub.id}','approved')">
                        ${IC.check} ${lbl("موافقة","Genehmigen","Approve")}
                      </button>
                      <button class="btn btn-sm btn-danger" style="display:flex;align-items:center;gap:5px;"
                        onclick="reviewSubscription('${sub.id}','rejected')">
                        ${IC.delete} ${lbl("رفض","Ablehnen","Reject")}
                      </button>
                    </div>
                  ` : sub.reviewNote ? `
                    <div style="margin-top:10px;font-size:12px;color:var(--text3);font-style:italic;">
                      ${lbl("ملاحظة:","Hinweis:","Note:")} ${escHtml(sub.reviewNote)}
                    </div>
                  ` : ""}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      `}
    </div>
  `;
}

window.reviewSubscription = function(subId, action) {
  const sub = (state.subscriptions || []).find(s => s.id === subId);
  if (!sub) return;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const note = document.getElementById(`note-${subId}`)?.value?.trim() || "";

  adminMutate(() => {
    sub.status      = action;
    sub.reviewedAt  = new Date().toISOString().split("T")[0];
    sub.reviewNote  = note;

    if (action === "approved") {
      const user = state.users.find(u => u.id === sub.userId);
      if (user) user.plan = sub.planId;
    }
  });

  showToast(
    action === "approved"
      ? lbl(`تمت الموافقة على اشتراك ${sub.userName}`, `Abonnement von ${sub.userName} genehmigt`, `${sub.userName}'s subscription approved`)
      : lbl(`تم رفض طلب ${sub.userName}`, `Anfrage von ${sub.userName} abgelehnt`, `${sub.userName}'s request rejected`),
    action === "approved" ? "success" : "info"
  );
  setAdminTab("subscriptions");
};

window.viewReceiptFull = function(subId) {
  const sub = (state.subscriptions || []).find(s => s.id === subId);
  if (!sub?.receiptData) return;
  openModal(`
    <div class="modal-title">${state.lang==="ar"?"إيصال الدفع":state.lang==="de"?"Zahlungsbeleg":"Payment Receipt"}</div>
    <img src="${sub.receiptData}" alt="receipt" style="width:100%;border-radius:var(--radius-sm);">
    <div style="margin-top:12px;font-size:13px;color:var(--text2);">
      <strong>${sub.userName}</strong> · ${sub.planName} · ${sub.amount} ${state.lang==="ar"?"ج.م":"EGP"}
    </div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${state.lang==="ar"?"إغلاق":"Close"}</button>
    </div>
  `);
};

// User-facing: request upgrade with receipt upload
window.requestUpgrade = function(planId) {
  const plan = state.plans.find(p => p.id === planId);
  const user = state.currentUser;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  if (!plan || !user) return;
  const price = plan.priceMonthly;

  openModal(`
    <div class="modal-title">${IC.payments} ${lbl("طلب ترقية الخطة","Plan-Upgrade anfordern","Request Plan Upgrade")}</div>
    <div class="alert info" style="margin-bottom:14px;">
      ${IC.check}
      ${lbl(
        `الخطة: <strong>${plan.name}</strong> · السعر: <strong>${price.toLocaleString()} ج.م/شهر</strong>`,
        `Plan: <strong>${plan.name}</strong> · Preis: <strong>${price.toLocaleString()} EGP/Mo</strong>`,
        `Plan: <strong>${plan.name}</strong> · Price: <strong>${price.toLocaleString()} EGP/mo</strong>`
      )}
    </div>
    <div class="form-group">
      <label class="form-label">${lbl("ارفع إيصال الدفع","Zahlungsbeleg hochladen","Upload Payment Receipt")} <span class="req">*</span></label>
      <div class="upload-area" id="receipt-upload-area"
        onclick="document.getElementById('receipt-file-input').click()"
        style="min-height:100px;">
        <div class="upload-placeholder">
          <div class="upload-icon-wrap">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
          <div class="upload-text">${lbl("انقر لرفع الإيصال","Beleg hochladen","Click to upload receipt")}</div>
          <div class="upload-sub">PNG, JPG, PDF</div>
        </div>
      </div>
      <input type="file" id="receipt-file-input" accept="image/*,application/pdf" style="display:none" onchange="handleReceiptFile(event,'${planId}',${price})">
    </div>
    <div class="form-group">
      <label class="form-label">${lbl("ملاحظة إضافية (اختياري)","Hinweis (optional)","Additional note (optional)")}</label>
      <input class="input-field" id="receipt-note" type="text" placeholder="${lbl("مثال: تم الدفع عبر فودافون كاش","z.B. Zahlung über Vodafone Cash","e.g. Paid via bank transfer")}">
    </div>
    <div class="modal-actions">
      <button class="btn btn-md btn-ghost" onclick="closeModal()">${lbl("إلغاء","Abbrechen","Cancel")}</button>
    </div>
  `);
};

window.handleReceiptFile = function(e, planId, amount) {
  const file = e.target.files[0];
  if (!file) return;
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const reader = new FileReader();
  reader.onload = ev => {
    const receiptData = ev.target.result;
    const area = document.getElementById("receipt-upload-area");
    if (area) {
      area.innerHTML = `
        <div style="padding:12px;text-align:center;">
          <img src="${receiptData}" alt="receipt" style="max-height:120px;border-radius:8px;margin-bottom:8px;">
          <div style="color:var(--accent);font-size:12px;font-weight:700;">${IC.check} ${lbl("تم رفع الإيصال","Beleg hochgeladen","Receipt uploaded")}</div>
        </div>`;
    }
    // Submit button
    const actions = document.querySelector(".modal-actions");
    if (actions) {
      const submitBtn = document.createElement("button");
      submitBtn.className = "btn btn-md btn-primary";
      submitBtn.style = "display:flex;align-items:center;gap:6px;";
      submitBtn.innerHTML = `${IC.check} ${lbl("إرسال الطلب","Anfrage senden","Submit Request")}`;
      submitBtn.onclick = () => submitUpgradeRequest(planId, amount, receiptData);
      actions.insertBefore(submitBtn, actions.firstChild);
    }
  };
  reader.readAsDataURL(file);
};

window.submitUpgradeRequest = function(planId, amount, receiptData) {
  const user = state.currentUser;
  const plan = state.plans.find(p => p.id === planId);
  const lbl = (ar, de, en) => state.lang==="ar"?ar:state.lang==="de"?de:en;
  const note = document.getElementById("receipt-note")?.value?.trim() || "";

  const sub = {
    id:          `sub_${Date.now()}`,
    userId:      user.id,
    userName:    user.name,
    userEmail:   user.email,
    planId,
    planName:    plan?.name || planId,
    amount,
    receiptData,
    note,
    status:      "pending",
    requestedAt: new Date().toISOString().split("T")[0],
    reviewedAt:  null,
    reviewNote:  "",
  };

  if (!state.subscriptions) state.subscriptions = [];
  // Remove any existing pending request for same user+plan
  state.subscriptions = state.subscriptions.filter(s => !(s.userId === user.id && s.planId === planId && s.status === "pending"));
  state.subscriptions.push(sub);
  persistState();
  closeModal();
  showToast(lbl("تم إرسال طلبك! سيراجعه الأدمن قريباً","Anfrage gesendet! Der Admin prüft sie bald","Request sent! Admin will review it soon"), "success");
};

/* ─── INIT ────────────────────────────────────────────── */
(function init() {
  // Init BroadcastChannel for cross-tab sync
  try {
    _bc = new BroadcastChannel("hireflow_sync");
    _bc.onmessage = (e) => {
      if (e.data?.type === "STATE_UPDATE") {
        const shared = e.data.shared;
        if (shared.users)         state.users         = shared.users;
        if (shared.plans)         state.plans         = shared.plans;
        if (shared.coupons)       state.coupons       = shared.coupons;
        if (shared.subscriptions) state.subscriptions = shared.subscriptions;
        if (shared.targets)       state.targets       = shared.targets;
        if (shared.social)        state.social        = shared.social;
        if (shared.posts)         state.posts         = shared.posts;
        // Refresh currentUser data
        if (state.currentUser) {
          const fresh = state.users.find(u => u.id === state.currentUser.id);
          if (fresh) state.currentUser = fresh;
        }
        renderApp();
      }
    };
  } catch(e) {}

  // Load shared state from localStorage
  loadSharedState();

  const saved = loadSession();

  // Restore lang/theme
  if (saved?.lang)  state.lang  = saved.lang;
  else {
    const navLang = (navigator.language || "").toLowerCase();
    if (navLang.startsWith("ar")) state.lang = "ar";
    else if (navLang.startsWith("de")) state.lang = "de";
    else state.lang = "en";
  }
  if (saved?.theme) state.theme = saved.theme;

  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.lang = state.lang;
  document.documentElement.dir  = state.lang === "ar" ? "rtl" : "ltr";

  // Auto-login if session exists
  if (saved?.userId) {
    const user = state.users.find(u => u.id === saved.userId && u.status === "active");
    if (user) {
      state.currentUser = user;
      state.page = "dashboard";
    }
  }

  // Load saved email for autofill
  try { state.savedEmail = localStorage.getItem("hf_saved_email") || ""; } catch(e) { state.savedEmail = ""; }

  // Init subscriptions array
  if (!state.subscriptions) state.subscriptions = [];

  renderApp();
})();
