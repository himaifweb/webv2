export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4";
  };
  public: {
    Tables: {
      activities: {
        Row: {
          created_at: string | null;
          description: string | null;
          end_date: string;
          id: string;
          is_published: boolean;
          location_detail: string | null;
          location_type: string | null;
          registration_link: string | null;
          slug: string;
          start_date: string;
          thumbnail_url: string;
          title: string;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          end_date: string;
          id?: string;
          is_published?: boolean;
          location_detail?: string | null;
          location_type?: string | null;
          registration_link?: string | null;
          slug: string;
          start_date: string;
          thumbnail_url: string;
          title: string;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          end_date?: string;
          id?: string;
          is_published?: boolean;
          location_detail?: string | null;
          location_type?: string | null;
          registration_link?: string | null;
          slug?: string;
          start_date?: string;
          thumbnail_url?: string;
          title?: string;
        };
        Relationships: [];
      };
      galleries: {
        Row: {
          created_at: string;
          id: string;
          image_url: string;
          public_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_url: string;
          public_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_url?: string;
          public_id?: string;
        };
        Relationships: [];
      };
      management_periods: {
        Row: {
          created_at: string;
          id: string;
          periode: string;
          status_aktif: boolean;
        };
        Insert: {
          created_at?: string;
          id?: string;
          periode: string;
          status_aktif?: boolean;
        };
        Update: {
          created_at?: string;
          id?: string;
          periode?: string;
          status_aktif?: boolean;
        };
        Relationships: [];
      };
      news: {
        Row: {
          created_at: string;
          cta_url: string;
          description: string;
          id: number;
          id_activities: string | null;
        };
        Insert: {
          created_at?: string;
          cta_url: string;
          description: string;
          id?: number;
          id_activities?: string | null;
        };
        Update: {
          created_at?: string;
          cta_url?: string;
          description?: string;
          id?: number;
          id_activities?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "news_id_activities_fkey";
            columns: ["id_activities"];
            isOneToOne: true;
            referencedRelation: "activities";
            referencedColumns: ["id"];
          },
        ];
      };
      profiles: {
        Row: {
          id: string;
          role: string | null;
        };
        Insert: {
          id: string;
          role?: string | null;
        };
        Update: {
          id?: string;
          role?: string | null;
        };
        Relationships: [];
      };
      registration_settings: {
        Row: {
          id: string;
          link: string | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          link?: string | null;
          updated_at?: string;
        };
        Update: {
          id?: string;
          link?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      struktur_organisasi: {
        Row: {
          created_at: string | null;
          departemen: string | null;
          foto_url: string | null;
          id: string;
          jabatan: string;
          kategori: string;
          management_period_id: string | null;
          nama: string;
          nim: string;
        };
        Insert: {
          created_at?: string | null;
          departemen?: string | null;
          foto_url?: string | null;
          id?: string;
          jabatan: string;
          kategori: string;
          management_period_id?: string | null;
          nama: string;
          nim: string;
        };
        Update: {
          created_at?: string | null;
          departemen?: string | null;
          foto_url?: string | null;
          id?: string;
          jabatan?: string;
          kategori?: string;
          management_period_id?: string | null;
          nama?: string;
          nim?: string;
        };
        Relationships: [
          {
            foreignKeyName: "struktur_organisasi_periode_id_fkey";
            columns: ["management_period_id"];
            isOneToOne: false;
            referencedRelation: "management_periods";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
