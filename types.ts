export interface AddOnsProps {
  onHandleToggle: (id: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  addOns: {
    id: number;
    name: string;
    value: string;
    price: number;
    checked: boolean;
  }[];
}

export interface AppProps {
  curStep: number;
  setCurStep: React.Dispatch<React.SetStateAction<number>>;
}

export interface ButtonProps {
  children: React.ReactNode;
  styling: string;
  action: "back" | "next" | "click";
  handleClick?: () => void;
}

export interface OnsListProps {
  ons: {
    id: number;
    name: string;
    value: string;
    price: number;
    checked: boolean;
  };
  onHandleToggle: (id: number) => void;
}

export interface PersonalInfoProps {
  register: any;
  handleSubmit: any;
  onSubmit: () => void;
  errors: any;
  isValidEmail: RegExp;
  isValidPhone: RegExp;
}

export interface PlanProps {
  plan: {
    id: number;
    img: string;
    alt: string;
    PlanName: string;
    price: number;
  };
  handleClick: (index: number) => void;
  index: number;
  num: number;
}

export interface SelectPlanProps {
  selectedPlan: { plan: string; price: any };
  monthlyPlans: {
    id: number;
    PlanName: string;
    price: number;
    img: string;
    alt: string;
  }[];
  handleClick: (id: number) => void;
  num: number;
  onSubmit: () => void;
  error: string;
}

export interface StepListProps {
  step: {
    stepOrder: number;
    value: string;
  };
  curStep: number;
}
