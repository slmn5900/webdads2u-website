import React, { useState, createContext } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState('');
    const [header_section, setHeader_section] = useState([]);
    const [slider_section, setSlider_section] = useState([]);
    const [slider_section2, setSlider_section2] = useState([]);
    const [company_section, setCompany_section] = useState([]);
    const [design_section, setDesign_section] = useState([]);
    const [list_section, setList_section] = useState([]);
    const [amazing_section, setAmazing_section] = useState([]);
    const [amazingcard_section, setAmazingcard_section] = useState([]);
    const [work_section, setWork_section] = useState([]);
    const [choose_section, setChoose_section] = useState([]);
    const [consultation_section, setConsultation_section] = useState([]);
    const [qna_section, setQna_section] = useState([]);
    const [ourCreations, setOur_Creations] = useState([]);
    const [ourstreams, setourstreams] = useState([]);
    const [best_mobile_section, setBest_mobile_section] = useState([]);
    const [pagedata, setPagedata] = useState([]);

    const value = {
        activeMenu,
        setActiveMenu,
        header_section,
        setHeader_section,
        slider_section,
        setSlider_section,
        company_section,
        setCompany_section,
        design_section,
        setDesign_section,
        list_section,
        setList_section,
        amazing_section,
        setAmazing_section,
        amazingcard_section,
        setAmazingcard_section,
        work_section,
        setWork_section,
        choose_section,
        setChoose_section,
        consultation_section,
        setConsultation_section,
        qna_section,
        setQna_section,
        setOur_Creations,
        ourCreations,
        slider_section2,
        setSlider_section2,
        ourstreams,
        setourstreams,
        best_mobile_section,
        setBest_mobile_section,
        pagedata,
        setPagedata
    };

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
