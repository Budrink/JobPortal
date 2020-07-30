export interface CountryData {
  countryId: string;
  countryFlag: string;
  countryName: string;
}
/// just skills of users
export interface Skill {
  iD: string;
  name: string;
  img?: string;
  sliderImg?: string;
  globalCategory?: GlobalCategoryData;
}

//More global categories like IT, video< translation
export interface GlobalCategoryData {
  globalCategoryId: string;
  globalCategoryName: string;
  description?: string;
  globalCategoryImg?: string;
}

//The list of categories to be showed in the top of page
export interface TopCategoryData {
  topCategoryId: string;
  topCategory: Skill;
  itemsAmount: string;
}
export interface UserType {
  userTypeId: string;
  userTypeName: string;
}
export interface DurationData {
  durationId: string;
  durationText: string;
}
export interface ProjectType {
  projectTypeId: string;
  projectTypeName: string;
}
export interface HourRate {
  hourRateId: string;
  hourRateName: string;
}
export interface EnglishLevel {
  englishLevelId: string;
  englishLevelName: string;
}
export interface Language {
  languageId: string;
  languageName: string;
}
export interface Currency {
  currencyId: string;
  currencyName: string;
}

export interface userFeedback {
  feedbackId: string;
  freelancerId: string;
  contract: Contract;
  text?: string;
  mark?: number;
}

export interface Message {
  messageId: string;
  senderId: string;
  receiverId: string;
  text: string;
  status: string; // 'new', 'opened'
  date: string;
  sender: string; //'freelancer', 'customer'
  attachments: Attachment[];
}
export interface Contract {
  contractId: string;
  job: JobData; // нужно для передачи, в базе можзно хранить только jobId
  userId: string;
  type: string; // 'hourly', 'fixed';
  status: string; // 'inProgress', 'finished', 'canceled'
  beginDate?: string;
  endDate?: string;
  rate?: number;
  attachments?: Attachment[];
  coverLetter?: string;
  terms: string; // 'beginner',
  messages?: Message[];
}

export interface Experience {
  iD: number;
  userId: number;
  companyName: string;
  period: string;
  title: string;
  description: string;
}
// export interface Skill {
//   iD: string;
//   skillName: string;
// }

export interface UserSkill {
  skill: Skill;
  percent: number;
}
export interface CraftedProject {
  iD: string;
  userId?: string;
  name: string;
  link?: string;
  img?: string;
}
export interface File {
  iD: string;
  name: string;
  link: string;
  size: number;
}
export interface Project {
  iD: string;
  title: string;
  url?: string;
  img?: string;
  files?: File[];
}
export interface Award {
  iD: string;
  title: string;
  date: string;
  img?: string;
  files?: File[];
}
export interface UserExperience {
  iD: string;
  title: string;
  description: string;
  companyName: string;
  beginDate: string;
  endDate?: string;
}

export interface Education {
  iD: string;
  companyName: string;
  beginDate: string;
  endDate?: string;
  title: string;
  description: string;
}

export interface CompanyData extends User {
  companyId: string;
  companyName: string;
  companyImgJpg?: string;
  companyImgPng?: string;
  verifiedCompany?: boolean;
}

export interface AccountSettings {
  publicProfile?: boolean;
  sharePhoto?: boolean;
  showFeedback?: boolean;
  profileSearchible?: boolean;
  disableAccount?: boolean;
  disableTemporarily?: boolean;
  language?: Language;
  currency?: Currency;
  sendWeeklyAlerts?: boolean;
  sendBonusAlerts?: boolean;
  forwardMessages?: boolean;
  shareSecurityAlerts?: boolean;
  detailPageDesign?: string;
  newPassowrd?: string;
}

export interface User {
  userId: string;
  userPhoto?: string;
  userPhotoFile?: File;
  userBunnerFile?: File;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  joinDate: string;
  userName: string;
  country: CountryData;
  address?: string;
  longitude?: string;
  latitude?: string;
  numberOfEmployees?: number;
  department?: string;
  description?: string;
  title?: string;
  awards?: Award[];
  projects?: Project[];
  accountSettings?: AccountSettings;
  amountOngoingProjects?: number;
  amountCompletedProjects?: number;
  amountCancelledProjects?: number;
  savedFreelancers?: string[];
  savedJobs?: string[];
  savedCompanies?: string[];
}
//Данные о фрилансере:
export interface FreelancerData extends User {
  // userId: string;
  // userPhoto: any;
  // FirstName: string;
  // lastName: string;
  // email: string;
  // gender: string;
  userRates: string;
  feedbacksCount: number;
  userFeedbacks: userFeedback[];
  hourRates: string;
  //   @valentine20658;

  servedHours: string;
  userSkills?: UserSkill[];
  userType: UserType;
  englishLevel: EnglishLevel;
  Languages: Language[];
  plusMember: boolean;
  remark?: string;
  projects?: Project[];
  craftedProjects?: CraftedProject[];
  experience?: UserExperience[];
  education?: Education[];
  tagList?: string[];
  globalCategory?: GlobalCategoryData;
  userCompany?: { companyName: string; companyImg: string };
}

//cut userData
export interface FollowerData {
  userId: string;
  userPhoto?: any;
  userName: string;
}
export interface Attachment {
  iD: string;
  fileName: string;
  fileSize: number;
  linkString: string;
}

export interface Proposal {
  iD: string;
  userId: string;
  jobId: string;
  terms: string;
  coverLetter: string;
  proposalDate: string;
  proposalStatus: string; // accepted, waiting, denied
}
export interface JobOffer {
  iD: string;
  offerData: string;
  userId: string; // sender of offer
  freelancerId: string; // receiver of offer
  jobId: string;
  description: string;
  deadLine: string;
  offerStatus: string; // ????
}
export interface JobData {
  jobId: string;
  title: string;
  qualification: string;
  company: CompanyData;
  type: string; //'fixed' or 'hourly'
  duration?: string;
  jobDetails: string;
  skillsRequired?: Skill[];
  Attachments?: Attachment[];
  proposalsCount?: number;
  proposals?: Proposal[];
  status?: string; // canceled, ongoing, completed
  hiredFreelancers?: string[]; //List of userId
}

export interface ComplainReasons {
  reasonId: string;
  reasonName: string;
}

export interface ArticleData {
  articleId: string;
  articleImg: string;
  title: string;
  date: string;
  author: User;
  category: GlobalCategoryData;
  text: string;
  tags: string[];
}
