export interface planOptionsType {
    Arcade:PlanType;
    Advanced:PlanType;
    Pro:PlanType;
  }

  interface PlanType{
    yearlyMonthFree:number;
    price: {
        yearly: number,
        monthly: number
    }
  }

  

  
   