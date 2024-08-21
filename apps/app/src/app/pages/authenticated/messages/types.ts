export type Person = {
  display_name: string;
  id?: string;
  type: 'CUSTOMER' | 'OPERATOR' | 'SHOP';
};

export type Message = {
  authorized_participants: Person[];
  current_participants: Person[];
  date_created: Date | string;
  date_updated: Date | string;
  entities: [
    {
      id: string;
      label: string;
      type: string;
    }
  ];
  id: string;
  metadata: {
    last_message_date: Date | string;
    last_sender: {
      display_name: string;
      organization_details: {
        display_name: string;
        id?: string;
        // type: 'SHOP';
        type: string;
      };
      //   type: 'SHOP_USER';
      type: string;
    };
    shop_reply_needed_since: null | string;
    total_count: number;
  };
  topic: {
    // type: 'FREE_TEXT';
    // value: 'Artículo no recibido';
    type: string;
    value: string;
  };
};
