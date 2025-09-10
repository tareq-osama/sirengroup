import { 
  Home, 
  Eye, 
  Send, 
  Target, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  LineChart, 
  Layers, 
  BrainCircuit,
  Users,
  UserRoundSearch,
  BadgeCheck,
  ShieldCheck,
  UserRound,
  Award,
  Library,
  FileText,
  Play,
  MessageSquare,
  Phone
} from 'lucide-react';

export type ServiceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  tier: "basic" | "special";
};

export type AudienceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type ResourceItem = {
  title: string;
  kind: "كتاب" | "مرجع" | "بحث" | "مقال" | "أداة" | "رابط" | "فيديو";
  description: string;
  tags: string[];
  href?: string;
};

export type FacultyMember = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  badges: string[];
};

export type PartnerItem = {
  name: string;
  description: string;
  logo: string;
  type: "university" | "accreditation" | "institution";
};

// Services Data
export const basicServices: ServiceItem[] = [
  {
    title: "تأمين التسجيل في الجامعات",
    description: "مساعدة الطلاب في اختيار الجامعات المناسبة والتسجيل فيها.",
    icon: GraduationCap,
    tier: "basic"
  },
  {
    title: "دورات بحثية متخصصة",
    description: "صقل مهارات الطلاب في إعداد الدراسات والأبحاث الأكاديمية.",
    icon: BookOpen,
    tier: "basic"
  },
  {
    title: "دورات منهجية وورش إحصاء وتحليل",
    description: "تعزيز المهارات البحثية باستخدام أحدث البرامج.",
    icon: LineChart,
    tier: "basic"
  },
  {
    title: "الدعم المنهجي",
    description: "توجيه الطلاب في اختيار وصياغة المناهج البحثية الملائمة.",
    icon: Layers,
    tier: "basic"
  },
  {
    title: "الإشراف العلمي",
    description: "متابعة الأبحاث خطوة بخطوة وتقديم التوجيه الأكاديمي المستمر.",
    icon: BrainCircuit,
    tier: "basic"
  }
];

export const specialServices: ServiceItem[] = [
  {
    title: "محاضرات علمية في المواد التخصصية",
    description: "يقدمها نخبة من الأساتذة حضوريًا وعن بُعد.",
    icon: GraduationCap,
    tier: "special"
  },
  {
    title: "الإشراف الكامل على الرسائل العلمية (ماجستير ودكتوراه)",
    description: "من اختيار الموضوع حتى المناقشة النهائية.",
    icon: BookOpen,
    tier: "special"
  },
  {
    title: "إقامة مناقشات علمية",
    description: "جلسات نقاش للأبحاث والرسائل، حضوريًا أو عبر المنصات الإلكترونية.",
    icon: MessageSquare,
    tier: "special"
  }
];

// Audience Data
export const audienceItems: AudienceItem[] = [
  {
    title: "طلاب مرحلة ما بعد التعليم الجامعي",
    description: "الراغبون في متابعة دراساتهم العليا، مع التركيز على ذوي المعدلات العالية في البكالوريوس.",
    icon: Users
  },
  {
    title: "الباحثون المستقلون",
    description: "لتطوير قدراتهم البحثية ونشر أعمالهم في مجلات محكّمة.",
    icon: UserRoundSearch
  },
  {
    title: "المهتمون بالبحث العلمي الأكاديمي",
    description: "الراغبون في صقل مهاراتهم البحثية، سواء كانوا خريجي جامعات أو مهتمين بالمجال الأكاديمي.",
    icon: GraduationCap
  }
];

// Faculty Data (placeholder)
export const facultyMembers: FacultyMember[] = [
  {
    name: "د. أحمد محمد",
    role: "مدير المركز",
    bio: "خبير في الدراسات العليا مع أكثر من 15 عامًا من الخبرة في الإشراف على الرسائل العلمية.",
    avatar: "/images/faculty/ahmed-mohamed.jpg",
    badges: ["دكتوراه في الإدارة", "خبير معتمد", "15+ سنة خبرة"]
  },
  {
    name: "د. فاطمة علي",
    role: "أستاذة المنهجية البحثية",
    bio: "متخصصة في المناهج البحثية والإحصاء مع خبرة واسعة في تدريب الباحثين.",
    avatar: "/images/faculty/fatima-ali.jpg",
    badges: ["دكتوراه في الإحصاء", "خبيرة منهجية", "10+ سنة خبرة"]
  },
  {
    name: "د. محمد حسن",
    role: "مستشار التسجيل الجامعي",
    bio: "خبير في شؤون التسجيل في الجامعات الدولية مع شبكة واسعة من العلاقات الأكاديمية.",
    avatar: "/images/faculty/mohamed-hassan.jpg",
    badges: ["خبير تسجيل جامعي", "شبكة علاقات دولية", "8+ سنة خبرة"]
  }
];

// Partners Data
export const partners: PartnerItem[] = [
  {
    name: "جامعة دمشق",
    description: "شراكة أكاديمية في برامج الدراسات العليا",
    logo: "/images/partners/damascus-university.png",
    type: "university"
  },
  {
    name: "جامعة حلب",
    description: "تعاون في مجال البحث العلمي والتدريب",
    logo: "/images/partners/aleppo-university.png",
    type: "university"
  },
  {
    name: "الاعتماد الدولي للتعليم العالي",
    description: "شهادة اعتماد دولية لبرامجنا الأكاديمية",
    logo: "/images/partners/international-accreditation.png",
    type: "accreditation"
  }
];

// Resources Data
export const resources: ResourceItem[] = [
  {
    title: "دليل البحث العلمي الشامل",
    kind: "كتاب",
    description: "دليل شامل لطلاب الدراسات العليا في منهجية البحث العلمي",
    tags: ["منهجية", "بحث علمي", "دليل"],
    href: "/resources/research-guide.pdf"
  },
  {
    title: "أدوات التحليل الإحصائي",
    kind: "أداة",
    description: "مجموعة من الأدوات والبرامج للتحليل الإحصائي",
    tags: ["إحصاء", "تحليل", "أدوات"],
    href: "/resources/statistical-tools.zip"
  },
  {
    title: "فيديو: كيفية كتابة الرسالة العلمية",
    kind: "فيديو",
    description: "سلسلة فيديوهات تعليمية لكتابة الرسائل العلمية",
    tags: ["فيديو", "تعليمي", "رسالة علمية"],
    href: "/resources/thesis-writing-videos"
  },
  {
    title: "قاعدة بيانات المجلات المحكمة",
    kind: "رابط",
    description: "قائمة شاملة بالمجلات العلمية المحكمة للنشر",
    tags: ["مجلات", "نشر", "محكمة"],
    href: "https://example.com/journals"
  }
];

// Navigation Data
export const navigationItems = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "الخدمات", href: "/services" },
  { label: "الجمهور", href: "/audience" },
  { label: "الشراكات", href: "/partners" },
  { label: "أعضاء الهيئة", href: "/faculty" },
  { label: "المكتبة الرقمية", href: "/library" },
  { label: "تواصل", href: "/contact" }
];

// Hero Content
export const heroContent = {
  title: "مرحبًا بكم في مركز Sirene للدراسات العليا",
  subtitle: "حيث نوفّر بيئة تعليمية تفاعلية لطلاب الماجستير والدكتوراه، حضوريًا وعن بُعد",
  description: "يهدف مركزنا إلى تمكين الباحثين من تطوير مهاراتهم البحثية، وإنجاز أبحاثهم الأكاديمية بكفاءة عالية.",
  cta: "اكتشف خدماتنا",
  ctaLink: "/services"
};

// About Page Content
export const aboutContent = {
  vision: {
    title: "الرؤية",
    description: "أن يكون المركز المرجعية الأولى عربيًا وإقليميًا في دعم طلاب الدراسات العليا، حضوريًا وعن بُعد، بما يضمن بناء باحثين متميزين قادرين على الإسهام الفاعل في المعرفة وخدمة المجتمع الأكاديمي.",
    icon: Eye
  },
  mission: {
    title: "الرسالة",
    description: "تمكين طلاب الماجستير والدكتوراه من إنجاز أبحاثهم ورسائلهم العلمية بكفاءة عالية، عبر برامج تعليمية تفاعلية، ودورات تدريبية متخصصة، وأدوات بحثية متقدمة، حضوريًا وعن بُعد.",
    icon: Send
  },
  goals: [
    "دعم البحث العلمي المتقدم",
    "رفع كفاءة الطلاب البحثية والمنهجية",
    "توفير بيئة تعليمية احترافية تواكب المعايير العالمية"
  ],
  values: [
    {
      title: "الريادة الدولية",
      description: "التعامل المباشر مع الجامعات المرموقة ذات الكفاءات العالية"
    },
    {
      title: "إتاحة الفرص للجميع",
      description: "تقديم خدمات بأسعار مناسبة للطلاب الراغبين في الالتحاق بالدراسات العليا"
    }
  ]
};
