interface Contact {
  label: string;
  value: string;
}

interface Info {
  label: string;
  value: string;
}

interface Time {
  start: string;
  end: string;
}

interface Education {
  school: string;
  location: string;
  type: string;
  major: string;
  GPA: string;
  other: string;
  time: Time;
}

interface Project {
  title: string;
  keywords: string;
  time: Time;
  skills: string[];
  link: string;
  abstract: string;
  kira: string[];
}

export interface ResumeInfo {
  name: string;
  contact: Contact[];
  info: Info[];
  education: Education[];
  project: Project[];
  skill: string[];
}
