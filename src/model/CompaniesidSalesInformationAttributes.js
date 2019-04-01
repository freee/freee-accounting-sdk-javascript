/**
 * freee API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.CompaniesidSalesInformationAttributes = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompaniesidSalesInformationAttributes model module.
   * @module model/CompaniesidSalesInformationAttributes
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>CompaniesidSalesInformationAttributes</code>.
   * @alias module:model/CompaniesidSalesInformationAttributes
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CompaniesidSalesInformationAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompaniesidSalesInformationAttributes} obj Optional instance to populate.
   * @return {module:model/CompaniesidSalesInformationAttributes} The populated <code>CompaniesidSalesInformationAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('industry_class')) {
        obj['industry_class'] = ApiClient.convertToType(data['industry_class'], 'String');
      }
      if (data.hasOwnProperty('industry_code')) {
        obj['industry_code'] = ApiClient.convertToType(data['industry_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * 種別（agriculture_forestry_fisheries_ore: 農林水産業/鉱業、construction: 建設、manufacturing_processing: 製造/加工、it: IT、transportation_logistics: 運輸/物流、retail_wholesale: 小売/卸売、finance_insurance: 金融/保険、real_estate_rental: 不動産/レンタル、profession: 士業/学術/専門技術サービス、design_production: デザイン/制作、food: 飲食、leisure_entertainment: レジャー/娯楽、lifestyle: 生活関連サービス、education: 教育/学習支援、medical_welfare: 医療/福祉、other_services: その他サービス、other: その他）Available values : agriculture_forestry_fisheries_ore, construction, manufacturing_processing, it, transportation_logistics, retail_wholesale, finance_insurance, real_estate_rental, profession, design_production, food, leisure_entertainment, lifestyle, education, medical_welfare, other_services, other
   * @member {module:model/CompaniesidSalesInformationAttributes.IndustryClassEnum} industry_class
   */
  exports.prototype['industry_class'] = undefined;
  /**
   * 業種（agriculture: 農業, forestry: 林業, fishing_industry: 漁業、水産養殖業, mining: 鉱業、採石業、砂利採取業, civil_contractors: 土木工事業, pavement: 舗装工事業, carpenter: とび、大工、左官等の建設工事業, renovation: リフォーム工事業, electrical_plumbing: 電気、管工事等の設備工事業, grocery: 食料品の製造加工業, machinery_manufacturing: 機械器具の製造加工業, printing: 印刷業, other_manufacturing: その他の製造加工業, software_development: 受託：ソフトウェア、アプリ開発業, system_development: 受託：システム開発業, survey_analysis: 受託：調査、分析等の情報処理業, server_management: 受託：サーバー運営管理, website_production: 受託：ウェブサイト制作, online_service_management: オンラインサービス運営業, online_advertising_agency: オンライン広告代理店業, online_advertising_planning_production: オンライン広告企画・制作業, online_media_management: オンラインメディア運営業, portal_site_management: ポータルサイト運営業, other_it_services: その他、IT サービス業, transport_delivery: 輸送業、配送業, delivery: バイク便等の配達業, other_transportation_logistics: その他の運輸業、物流業, other_wholesale: 卸売業：その他, clothing_wholesale_fiber: 卸売業：衣類卸売／繊維, food_wholesale: 卸売業：飲食料品, entrusted_development_wholesale: 卸売業：機械器具, online_shop: 小売業：無店舗　オンラインショップ, fashion_grocery_store: 小売業：店舗あり　ファッション、雑貨, food_store: 小売業：店舗あり　生鮮食品、飲食料品, entrusted_store: 小売業：店舗あり　機械、器具, other_store: 小売業：店舗あり　その他, financial_instruments_exchange: 金融業：金融商品取引, commodity_futures_investment_advisor: 金融業：商品先物取引、商品投資顧問, other_financial: 金融業：その他, brokerage_insurance: 保険業：仲介、代理, other_insurance: 保険業：その他, real_estate_developer: 不動産業：ディベロッパー, real_estate_brokerage: 不動産業：売買、仲介, rent_coin_parking_management: 不動産業：賃貸、コインパーキング、管理, rental_office_co_working_space: 不動産業：レンタルオフィス、コワーキングスペース, rental_lease: レンタル業、リース業, cpa_tax_accountant: 士業：公認会計士事務所、税理士事務所, law_office: 士業：法律事務所, judicial_and_administrative_scrivener: 士業：司法書士事務所／行政書士事務所, labor_consultant: 士業：社会保険労務士事務所, other_profession: 士業：その他, business_consultant: 経営コンサルタント, academic_research_development: 学術・開発研究機関, advertising_agency: 広告代理店, advertising_planning_production: 広告企画／制作, design_development: ソフトウェア、アプリ開発業（受託）, apparel_industry_design: 服飾デザイン業、工業デザイン業, website_design: ウェブサイト制作（受託）, advertising_planning_design: 広告企画／制作業, other_design: その他、デザイン／制作, restaurants_coffee_shops: レストラン、喫茶店等の飲食店業, sale_of_lunch: 弁当の販売業, bread_confectionery_manufacture_sale: パン、菓子等の製造販売業, delivery_catering_mobile_catering: デリバリー業、ケータリング業、移動販売業, hotel_inn: 宿泊業：ホテル、旅館, homestay: 宿泊業：民泊, travel_agency: 旅行代理店業, leisure_sports_facility_management: レジャー、スポーツ等の施設運営業, show_event_management: ショー、イベント等の興行、イベント運営業, barber: ビューティ、ヘルスケア業：床屋、理容室, beauty_salon: ビューティ、ヘルスケア業：美容室, spa_sand_bath_sauna: ビューティ、ヘルスケア業：スパ、砂風呂、サウナ等, este_ail_salon: ビューティ、ヘルスケア業：その他、エステサロン、ネイルサロン等, bridal_planning_introduce_wedding: 冠婚葬祭業：ブライダルプランニング、結婚式場紹介等, memorial_ceremony_funeral: 冠婚葬祭業：メモリアルセレモニー、葬儀等, moving: 引っ越し業, courier_industry: 宅配業, house_maid_cleaning_agency: 家事代行サービス業：無店舗　ハウスメイド、掃除代行等, re_tailoring_clothes: 家事代行サービス業：店舗あり　衣類修理、衣類仕立て直し等, training_institute_management: 研修所等の施設運営業, tutoring_school: 学習塾、進学塾等の教育・学習支援業, music_calligraphy_abacus_classroom: 音楽教室、書道教室、そろばん教室等のの教育・学習支援業, english_school: 英会話スクール等の語学学習支援業, tennis_yoga_judo_school: テニススクール、ヨガ教室、柔道場等のスポーツ指導、支援業, culture_school: その他、カルチャースクール等の教育・学習支援業, seminar_planning_management: セミナー等の企画、運営業, hospital_clinic: 医療業：病院、一般診療所、クリニック等, dental_clinic: 医療業：歯科診療所, other_medical_services: 医療業：その他、医療サービス等, nursery: 福祉業：保育所等、児童向け施設型サービス, nursing_home: 福祉業：老人ホーム等、老人向け施設型サービス, rehabilitation_support_services: 福祉業：療育支援サービス等、障害者等向け施設型サービス, other_welfare: 福祉業：その他、施設型福祉サービス, visit_welfare_service: 福祉業：訪問型福祉サービス, recruitment_temporary_staffing: 人材紹介業、人材派遣業, life_related_recruitment_temporary_staffing: 生活関連サービスの人材紹介業、人材派遣業, car_maintenance_car_repair: 自動車整備業、自動車修理業, machinery_equipment_maintenance_repair: 機械機器類の整備業、修理業, cleaning_maintenance_building_management: 清掃業、メンテナンス業、建物管理業, security: 警備業, other_services: その他のサービス業, npo: NPO, general_incorporated_association: 一般社団法人, general_incorporated_foundation: 一般財団法人, other_association: その他組織)
   * @member {module:model/CompaniesidSalesInformationAttributes.IndustryCodeEnum} industry_code
   */
  exports.prototype['industry_code'] = undefined;


  /**
   * Allowed values for the <code>industry_class</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IndustryClassEnum = {
    /**
     * value: "agriculture_forestry_fisheries_ore"
     * @const
     */
    "agriculture_forestry_fisheries_ore": "agriculture_forestry_fisheries_ore",
    /**
     * value: "construction"
     * @const
     */
    "construction": "construction",
    /**
     * value: "manufacturing_processing"
     * @const
     */
    "manufacturing_processing": "manufacturing_processing",
    /**
     * value: "it"
     * @const
     */
    "it": "it",
    /**
     * value: "transportation_logistics"
     * @const
     */
    "transportation_logistics": "transportation_logistics",
    /**
     * value: "retail_wholesale"
     * @const
     */
    "retail_wholesale": "retail_wholesale",
    /**
     * value: "finance_insurance"
     * @const
     */
    "finance_insurance": "finance_insurance",
    /**
     * value: "real_estate_rental"
     * @const
     */
    "real_estate_rental": "real_estate_rental",
    /**
     * value: "profession"
     * @const
     */
    "profession": "profession",
    /**
     * value: "design_production"
     * @const
     */
    "design_production": "design_production",
    /**
     * value: "food"
     * @const
     */
    "food": "food",
    /**
     * value: "leisure_entertainment"
     * @const
     */
    "leisure_entertainment": "leisure_entertainment",
    /**
     * value: "lifestyle"
     * @const
     */
    "lifestyle": "lifestyle",
    /**
     * value: "education"
     * @const
     */
    "education": "education",
    /**
     * value: "medical_welfare"
     * @const
     */
    "medical_welfare": "medical_welfare",
    /**
     * value: "other_services"
     * @const
     */
    "other_services": "other_services",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };

  /**
   * Allowed values for the <code>industry_code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IndustryCodeEnum = {
    /**
     * value: "agriculture"
     * @const
     */
    "agriculture": "agriculture",
    /**
     * value: "forestry"
     * @const
     */
    "forestry": "forestry",
    /**
     * value: "fishing_industry"
     * @const
     */
    "fishing_industry": "fishing_industry",
    /**
     * value: "mining"
     * @const
     */
    "mining": "mining",
    /**
     * value: "civil_contractors"
     * @const
     */
    "civil_contractors": "civil_contractors",
    /**
     * value: "pavement"
     * @const
     */
    "pavement": "pavement",
    /**
     * value: "carpenter"
     * @const
     */
    "carpenter": "carpenter",
    /**
     * value: "renovation"
     * @const
     */
    "renovation": "renovation",
    /**
     * value: "electrical_plumbing"
     * @const
     */
    "electrical_plumbing": "electrical_plumbing",
    /**
     * value: "grocery"
     * @const
     */
    "grocery": "grocery",
    /**
     * value: "machinery_manufacturing"
     * @const
     */
    "machinery_manufacturing": "machinery_manufacturing",
    /**
     * value: "printing"
     * @const
     */
    "printing": "printing",
    /**
     * value: "other_manufacturing"
     * @const
     */
    "other_manufacturing": "other_manufacturing",
    /**
     * value: "software_development"
     * @const
     */
    "software_development": "software_development",
    /**
     * value: "system_development"
     * @const
     */
    "system_development": "system_development",
    /**
     * value: "survey_analysis"
     * @const
     */
    "survey_analysis": "survey_analysis",
    /**
     * value: "server_management"
     * @const
     */
    "server_management": "server_management",
    /**
     * value: "website_production"
     * @const
     */
    "website_production": "website_production",
    /**
     * value: "online_service_management"
     * @const
     */
    "online_service_management": "online_service_management",
    /**
     * value: "online_advertising_agency"
     * @const
     */
    "online_advertising_agency": "online_advertising_agency",
    /**
     * value: "online_advertising_planning_production"
     * @const
     */
    "online_advertising_planning_production": "online_advertising_planning_production",
    /**
     * value: "online_media_management"
     * @const
     */
    "online_media_management": "online_media_management",
    /**
     * value: "portal_site_management"
     * @const
     */
    "portal_site_management": "portal_site_management",
    /**
     * value: "other_it_services"
     * @const
     */
    "other_it_services": "other_it_services",
    /**
     * value: "transport_delivery"
     * @const
     */
    "transport_delivery": "transport_delivery",
    /**
     * value: "delivery"
     * @const
     */
    "delivery": "delivery",
    /**
     * value: "other_transportation_logistics"
     * @const
     */
    "other_transportation_logistics": "other_transportation_logistics",
    /**
     * value: "other_wholesale"
     * @const
     */
    "other_wholesale": "other_wholesale",
    /**
     * value: "clothing_wholesale_fiber"
     * @const
     */
    "clothing_wholesale_fiber": "clothing_wholesale_fiber",
    /**
     * value: "food_wholesale"
     * @const
     */
    "food_wholesale": "food_wholesale",
    /**
     * value: "entrusted_development_wholesale"
     * @const
     */
    "entrusted_development_wholesale": "entrusted_development_wholesale",
    /**
     * value: "online_shop"
     * @const
     */
    "online_shop": "online_shop",
    /**
     * value: "fashion_grocery_store"
     * @const
     */
    "fashion_grocery_store": "fashion_grocery_store",
    /**
     * value: "food_store"
     * @const
     */
    "food_store": "food_store",
    /**
     * value: "entrusted_store"
     * @const
     */
    "entrusted_store": "entrusted_store",
    /**
     * value: "other_store"
     * @const
     */
    "other_store": "other_store",
    /**
     * value: "financial_instruments_exchange"
     * @const
     */
    "financial_instruments_exchange": "financial_instruments_exchange",
    /**
     * value: "commodity_futures_investment_advisor"
     * @const
     */
    "commodity_futures_investment_advisor": "commodity_futures_investment_advisor",
    /**
     * value: "other_financial"
     * @const
     */
    "other_financial": "other_financial",
    /**
     * value: "brokerage_insurance"
     * @const
     */
    "brokerage_insurance": "brokerage_insurance",
    /**
     * value: "other_insurance"
     * @const
     */
    "other_insurance": "other_insurance",
    /**
     * value: "real_estate_developer"
     * @const
     */
    "real_estate_developer": "real_estate_developer",
    /**
     * value: "real_estate_brokerage"
     * @const
     */
    "real_estate_brokerage": "real_estate_brokerage",
    /**
     * value: "rent_coin_parking_management"
     * @const
     */
    "rent_coin_parking_management": "rent_coin_parking_management",
    /**
     * value: "rental_office_co_working_space"
     * @const
     */
    "rental_office_co_working_space": "rental_office_co_working_space",
    /**
     * value: "rental_lease"
     * @const
     */
    "rental_lease": "rental_lease",
    /**
     * value: "cpa_tax_accountant"
     * @const
     */
    "cpa_tax_accountant": "cpa_tax_accountant",
    /**
     * value: "law_office"
     * @const
     */
    "law_office": "law_office",
    /**
     * value: "judicial_and_administrative_scrivener"
     * @const
     */
    "judicial_and_administrative_scrivener": "judicial_and_administrative_scrivener",
    /**
     * value: "labor_consultant"
     * @const
     */
    "labor_consultant": "labor_consultant",
    /**
     * value: "other_profession"
     * @const
     */
    "other_profession": "other_profession",
    /**
     * value: "business_consultant"
     * @const
     */
    "business_consultant": "business_consultant",
    /**
     * value: "academic_research_development"
     * @const
     */
    "academic_research_development": "academic_research_development",
    /**
     * value: "advertising_agency"
     * @const
     */
    "advertising_agency": "advertising_agency",
    /**
     * value: "advertising_planning_production"
     * @const
     */
    "advertising_planning_production": "advertising_planning_production",
    /**
     * value: "design_development"
     * @const
     */
    "design_development": "design_development",
    /**
     * value: "apparel_industry_design"
     * @const
     */
    "apparel_industry_design": "apparel_industry_design",
    /**
     * value: "website_design"
     * @const
     */
    "website_design": "website_design",
    /**
     * value: "advertising_planning_design"
     * @const
     */
    "advertising_planning_design": "advertising_planning_design",
    /**
     * value: "other_design"
     * @const
     */
    "other_design": "other_design",
    /**
     * value: "restaurants_coffee_shops"
     * @const
     */
    "restaurants_coffee_shops": "restaurants_coffee_shops",
    /**
     * value: "sale_of_lunch"
     * @const
     */
    "sale_of_lunch": "sale_of_lunch",
    /**
     * value: "bread_confectionery_manufacture_sale"
     * @const
     */
    "bread_confectionery_manufacture_sale": "bread_confectionery_manufacture_sale",
    /**
     * value: "delivery_catering_mobile_catering"
     * @const
     */
    "delivery_catering_mobile_catering": "delivery_catering_mobile_catering",
    /**
     * value: "hotel_inn"
     * @const
     */
    "hotel_inn": "hotel_inn",
    /**
     * value: "homestay"
     * @const
     */
    "homestay": "homestay",
    /**
     * value: "travel_agency"
     * @const
     */
    "travel_agency": "travel_agency",
    /**
     * value: "leisure_sports_facility_management"
     * @const
     */
    "leisure_sports_facility_management": "leisure_sports_facility_management",
    /**
     * value: "show_event_management"
     * @const
     */
    "show_event_management": "show_event_management",
    /**
     * value: "barber"
     * @const
     */
    "barber": "barber",
    /**
     * value: "beauty_salon"
     * @const
     */
    "beauty_salon": "beauty_salon",
    /**
     * value: "spa_sand_bath_sauna"
     * @const
     */
    "spa_sand_bath_sauna": "spa_sand_bath_sauna",
    /**
     * value: "este_ail_salon"
     * @const
     */
    "este_ail_salon": "este_ail_salon",
    /**
     * value: "bridal_planning_introduce_wedding"
     * @const
     */
    "bridal_planning_introduce_wedding": "bridal_planning_introduce_wedding",
    /**
     * value: "memorial_ceremony_funeral"
     * @const
     */
    "memorial_ceremony_funeral": "memorial_ceremony_funeral",
    /**
     * value: "moving"
     * @const
     */
    "moving": "moving",
    /**
     * value: "courier_industry"
     * @const
     */
    "courier_industry": "courier_industry",
    /**
     * value: "house_maid_cleaning_agency"
     * @const
     */
    "house_maid_cleaning_agency": "house_maid_cleaning_agency",
    /**
     * value: "re_tailoring_clothes"
     * @const
     */
    "re_tailoring_clothes": "re_tailoring_clothes",
    /**
     * value: "training_institute_management"
     * @const
     */
    "training_institute_management": "training_institute_management",
    /**
     * value: "tutoring_school"
     * @const
     */
    "tutoring_school": "tutoring_school",
    /**
     * value: "music_calligraphy_abacus_classroom"
     * @const
     */
    "music_calligraphy_abacus_classroom": "music_calligraphy_abacus_classroom",
    /**
     * value: "english_school"
     * @const
     */
    "english_school": "english_school",
    /**
     * value: "tennis_yoga_judo_school"
     * @const
     */
    "tennis_yoga_judo_school": "tennis_yoga_judo_school",
    /**
     * value: "culture_school"
     * @const
     */
    "culture_school": "culture_school",
    /**
     * value: "seminar_planning_management"
     * @const
     */
    "seminar_planning_management": "seminar_planning_management",
    /**
     * value: "hospital_clinic"
     * @const
     */
    "hospital_clinic": "hospital_clinic",
    /**
     * value: "dental_clinic"
     * @const
     */
    "dental_clinic": "dental_clinic",
    /**
     * value: "other_medical_services"
     * @const
     */
    "other_medical_services": "other_medical_services",
    /**
     * value: "nursery"
     * @const
     */
    "nursery": "nursery",
    /**
     * value: "nursing_home"
     * @const
     */
    "nursing_home": "nursing_home",
    /**
     * value: "rehabilitation_support_services"
     * @const
     */
    "rehabilitation_support_services": "rehabilitation_support_services",
    /**
     * value: "other_welfare"
     * @const
     */
    "other_welfare": "other_welfare",
    /**
     * value: "visit_welfare_service"
     * @const
     */
    "visit_welfare_service": "visit_welfare_service",
    /**
     * value: "recruitment_temporary_staffing"
     * @const
     */
    "recruitment_temporary_staffing": "recruitment_temporary_staffing",
    /**
     * value: "life_related_recruitment_temporary_staffing"
     * @const
     */
    "life_related_recruitment_temporary_staffing": "life_related_recruitment_temporary_staffing",
    /**
     * value: "car_maintenance_car_repair"
     * @const
     */
    "car_maintenance_car_repair": "car_maintenance_car_repair",
    /**
     * value: "machinery_equipment_maintenance_repair"
     * @const
     */
    "machinery_equipment_maintenance_repair": "machinery_equipment_maintenance_repair",
    /**
     * value: "cleaning_maintenance_building_management"
     * @const
     */
    "cleaning_maintenance_building_management": "cleaning_maintenance_building_management",
    /**
     * value: "security"
     * @const
     */
    "security": "security",
    /**
     * value: "other_services"
     * @const
     */
    "other_services": "other_services",
    /**
     * value: "npo"
     * @const
     */
    "npo": "npo",
    /**
     * value: "general_incorporated_association"
     * @const
     */
    "general_incorporated_association": "general_incorporated_association",
    /**
     * value: "general_incorporated_foundation"
     * @const
     */
    "general_incorporated_foundation": "general_incorporated_foundation",
    /**
     * value: "other_association"
     * @const
     */
    "other_association": "other_association"  };


  return exports;
}));


