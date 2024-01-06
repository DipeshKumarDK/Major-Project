import React, { useContext, createContext } from "react";
import { ethers } from "ethers";
import projectFactory from "../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";
import CampaignFactory from "../artifacts/contracts/Freelancing.sol/Freelancing.json";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";

// 0x395aFA04ac846356241dF119B5029396E7927B95

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

  const address = useAddress();
  const connect = useMetamask();

  const delProject = async (toDelete) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.deleteProject([toDelete]);
  };

  const getBalance = async (_id) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_ADDRESS,
      projectFactory.abi,
      signer
    );

    const projectData = await contract.getBalance(_id);
    return projectData;
  };

  const getProjects = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.getProjects();

    const AllProjects = projectData.map((project, i) => ({
      owner: project.owner,
      title: project.stringArray[3],
      description: project.stringArray[4],
      target: ethers.utils.formatEther(project.intArray[0].toString()),
      deadline: project.intArray[1].toNumber(),
      amountRaised: ethers.utils.formatEther(project.intArray[2].toString()),
      image: project.stringArray[5],
      visible: project.intArray[3],
      video: project.stringArray[1],
      tagline: project.stringArray[2],
      owner_name: project.stringArray[0],
      country: project.stringArray[6],
      hq_address: project.stringArray[7],
      plan: project.stringArray[8],
      twitter: project.stringArray[9],
      email: project.stringArray[10],
      instagram: project.stringArray[11],
      linkedIn: project.stringArray[12],
      category: project.category,
      prev_Amount_raised: ethers.utils.formatEther(project.intArray[4].toString()),
      valuation : ethers.utils.formatEther(project.intArray[5].toString()),
      min_invest: ethers.utils.formatEther(project.intArray[6].toString()),
      hi:project.intArray[6],
      donators: project.donators,
      donators_name: project.donators_name,
      doc:project.stringArray[13],
      updates:project.updates,
      pId: i,
    }));


    const needProjects = AllProjects.filter(
      (project) => project.visible?._hex === "0x00"
    );

    return needProjects;
  };

  const getUserProjects = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.getProjects();

    const AllProjects = projectData.map((project, i) => ({
      owner: project.owner,
      title: project.stringArray[3],
      description: project.stringArray[4],
      target: ethers.utils.formatEther(project.intArray[0].toString()),
      deadline: project.intArray[1].toNumber(),
      amountRaised: ethers.utils.formatEther(project.intArray[2].toString()),
      image: project.stringArray[5],
      visible: project.intArray[3],
      video: project.stringArray[1],
      tagline: project.stringArray[2],
      owner_name: project.stringArray[0],
      country: project.stringArray[6],
      hq_address: project.stringArray[7],
      plan: project.stringArray[8],
      twitter: project.stringArray[9],
      email: project.stringArray[10],
      instagram: project.stringArray[11],
      linkedIn: project.stringArray[12],
      category: project.category,
      prev_Amount_raised: ethers.utils.formatEther(project.intArray[4].toString()),
      valuation : ethers.utils.formatEther(project.intArray[5].toString()),
      min_invest: ethers.utils.formatEther(project.intArray[6].toString()),
      donators: project.donators,
      donators_name: project.donators_name,
      doc:project.stringArray[13],
      updates:project.updates,
      pId: i,
    }));

    const needProjects = AllProjects.filter(
      (project) => project.visible?._hex === "0x00"
    );

    const Projects = needProjects.filter(
      (project) => project.owner === address
    );

    return Projects;
  };

  const getActiveProjects = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.getProjects();

    const AllProjects = projectData.map((project, i) => ({
      owner: project.owner,
      title: project.stringArray[3],
      description: project.stringArray[4],
      target: ethers.utils.formatEther(project.intArray[0].toString()),
      deadline: project.intArray[1].toNumber(),
      amountRaised: ethers.utils.formatEther(project.intArray[2].toString()),
      image: project.stringArray[5],
      visible: project.intArray[3],
      video: project.stringArray[1],
      tagline: project.stringArray[2],
      owner_name: project.stringArray[0],
      country: project.stringArray[6],
      hq_address: project.stringArray[7],
      plan: project.stringArray[8],
      twitter: project.stringArray[9],
      email: project.stringArray[10],
      instagram: project.stringArray[11],
      linkedIn: project.stringArray[12],
      category: project.category,
      prev_Amount_raised: ethers.utils.formatEther(project.intArray[4].toString()),
      valuation : ethers.utils.formatEther(project.intArray[5].toString()),
      min_invest: ethers.utils.formatEther(project.intArray[6].toString()),
      donators: project.donators,
      donators_name: project.donators_name,
      doc:project.stringArray[13],
      updates:project.updates,
      pId: i,
    }));

    const needProjects = AllProjects.filter(
      (project) => project.visible?._hex === "0x00"
    );

    return needProjects;
  };

  const getSearchProjects = async (search) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.getProjects();

    const AllProjects = projectData.map((project, i) => ({
      owner: project.owner,
      title: project.stringArray[3],
      description: project.stringArray[4],
      target: ethers.utils.formatEther(project.intArray[0].toString()),
      deadline: project.intArray[1].toNumber(),
      amountRaised: ethers.utils.formatEther(project.intArray[2].toString()),
      image: project.stringArray[5],
      visible: project.intArray[3],
      video: project.stringArray[1],
      tagline: project.stringArray[2],
      owner_name: project.stringArray[0],
      country: project.stringArray[6],
      hq_address: project.stringArray[7],
      plan: project.stringArray[8],
      twitter: project.stringArray[9],
      email: project.stringArray[10],
      instagram: project.stringArray[11],
      linkedIn: project.stringArray[12],
      category: project.category,
      prev_Amount_raised: ethers.utils.formatEther(project.intArray[4].toString()),
      valuation : ethers.utils.formatEther(project.intArray[5].toString()),
      min_invest: ethers.utils.formatEther(project.intArray[6].toString()),
      donators: project.donators,
      donators_name: project.donators_name,
      doc:project.stringArray[13],
      updates:project.updates,
      pId: i,
    }));

    const Projects = AllProjects.filter(
      (project) => project.title === search
    );


    return Projects;
  };

  const getInvestmentProjects = async (_investment) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.getProjects();

    const AllProjects = projectData.map((project, i) => ({
      owner: project.owner,
      title: project.stringArray[3],
      description: project.stringArray[4],
      target: ethers.utils.formatEther(project.intArray[0].toString()),
      deadline: project.intArray[1].toNumber(),
      amountRaised: ethers.utils.formatEther(project.intArray[2].toString()),
      image: project.stringArray[5],
      visible: project.intArray[3],
      video: project.stringArray[1],
      tagline: project.stringArray[2],
      owner_name: project.stringArray[0],
      country: project.stringArray[6],
      hq_address: project.stringArray[7],
      plan: project.stringArray[8],
      twitter: project.stringArray[9],
      email: project.stringArray[10],
      instagram: project.stringArray[11],
      linkedIn: project.stringArray[12],
      category: project.category,
      prev_Amount_raised: ethers.utils.formatEther(project.intArray[4].toString()),
      valuation : ethers.utils.formatEther(project.intArray[5].toString()),
      min_invest: ethers.utils.formatEther(project.intArray[6].toString()),
      donators: project.donators,
      donators_name: project.donators_name,
      doc:project.stringArray[13],
      updates:project.updates,
      pId: i,
    }));

    const Projects = AllProjects.filter(
      (project) => project.donators.includes(_investment)
    );


    return Projects;
  };

  const getCategoryProjects = async (_category) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.getProjects();

    const AllProjects = projectData.map((project, i) => ({
      owner: project.owner,
      title: project.stringArray[3],
      description: project.stringArray[4],
      target: ethers.utils.formatEther(project.intArray[0].toString()),
      deadline: project.intArray[1].toNumber(),
      amountRaised: ethers.utils.formatEther(project.intArray[2].toString()),
      image: project.stringArray[5],
      visible: project.intArray[3],
      video: project.stringArray[1],
      tagline: project.stringArray[2],
      owner_name: project.stringArray[0],
      country: project.stringArray[6],
      hq_address: project.stringArray[7],
      plan: project.stringArray[8],
      twitter: project.stringArray[9],
      email: project.stringArray[10],
      instagram: project.stringArray[11],
      linkedIn: project.stringArray[12],
      category: project.category,
      prev_Amount_raised: ethers.utils.formatEther(project.intArray[4].toString()),
      valuation : ethers.utils.formatEther(project.intArray[5].toString()),
      min_invest: ethers.utils.formatEther(project.intArray[6].toString()),
      donators: project.donators,
      donators_name: project.donators_name,
      doc:project.stringArray[13],
      updates:project.updates,
      pId: i,
    }));

    const Projects = AllProjects.filter(
      (project) => project.category === _category
    );


    return Projects;
  };

  const getFavouriteProjects = async (_favs) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.getProjects();

    const AllProjects = projectData.map((project, i) => ({
      owner: project.owner,
      title: project.stringArray[3],
      description: project.stringArray[4],
      target: ethers.utils.formatEther(project.intArray[0].toString()),
      deadline: project.intArray[1].toNumber(),
      amountRaised: ethers.utils.formatEther(project.intArray[2].toString()),
      image: project.stringArray[5],
      visible: project.intArray[3],
      video: project.stringArray[1],
      tagline: project.stringArray[2],
      owner_name: project.stringArray[0],
      country: project.stringArray[6],
      hq_address: project.stringArray[7],
      plan: project.stringArray[8],
      twitter: project.stringArray[9],
      email: project.stringArray[10],
      instagram: project.stringArray[11],
      linkedIn: project.stringArray[12],
      category: project.category,
      prev_Amount_raised: ethers.utils.formatEther(project.intArray[4].toString()),
      valuation : ethers.utils.formatEther(project.intArray[5].toString()),
      min_invest: ethers.utils.formatEther(project.intArray[6].toString()),
      donators: project.donators,
      donators_name: project.donators_name,
      doc:project.stringArray[13],
      updates:project.updates,
      pId: i,
    }));

    const Projects = AllProjects.filter(
      (project) => _favs.includes(project.pId)
    );


    return Projects;
  };

  const donate = async (pId, amount, _name) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
    "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.InvestInProject(pId, _name, { value: ethers.utils.parseEther(amount)});
    return projectData;
  };

  const withdraw = async (pId) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
    "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.withdraw(pId);
  };

  const getDonations = async (pId) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const donations = await contract.getDonators(pId);
    const n = donations.length;

    const AllDonations = [];

    for (let i = 0; i < n; i++) {
      AllDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[i].toString()),
      });
    }

    return AllDonations;
  };

  const abort = async (pId) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
    "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    await contract.abortProject(pId);
  };

  const contract = "0x395aFA04ac846356241dF119B5029396E7927B95";

  const makeUpdate = async (pId, _update, _date) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
    "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.makeUpdate(pId, _update, _date);
  };

  const makeResponse = async (pId, pId1, _add, _vote) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
    "0x395aFA04ac846356241dF119B5029396E7927B95",
      projectFactory.abi,
      signer
    );

    const projectData = await contract.makeResponse(pId, pId1, _add, _vote);
  };







  const getJobs = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0xe88617fE2B380b397400B66e95545c827BD84726",
      CampaignFactory.abi,
      signer
    );

    const jobData = await contract.getJobs();

    const AllJobs = jobData.map((campaign, i) => ({
      owner: campaign.owner,
      owner_name: campaign.stringArray[0],
      title: campaign.stringArray[1],
      description: campaign.stringArray[2],
      linkedIn: campaign.stringArray[3],
      twitter: campaign.stringArray[4],
      instagram: campaign.stringArray[5],
      email: campaign.stringArray[6],
      company_address: campaign.stringArray[7],
      company_desc: campaign.stringArray[8],
      deadline: campaign.intArray[0].toNumber(),
      expected_time: ethers.utils.formatEther(campaign.intArray[1].toString())*1000000000000000000,
      expected_cost: ethers.utils.formatEther(campaign.intArray[2].toString())*1000000000000000000,
      bidders:campaign.bidders,
      image:campaign.stringArray[9],
      _id: campaign.stringArray[10],
      category:campaign.category,
      pId: ethers.utils.formatEther(campaign.pId.toString())*1000000000000000000,
      visible: ethers.utils.formatEther(campaign.visible.toString())*1000000000000000000,
      responses: campaign.resp,
      asks: campaign.ask,
      totalAsk: ethers.utils.formatEther(campaign.totalAsks.toString())*1000000000000000000,
      final_amount: ethers.utils.formatEther(campaign.final_amount.toString())*1000000000000000000,
      final_selection: ethers.utils.formatEther(campaign.final_selection.toString())*1000000000000000000,
      location: campaign.stringArray[11],
      finished: ethers.utils.formatEther(campaign.finished.toString())*1000000000000000000,
    }));

    const needJobs = AllJobs.filter(
      (project) => project.visible === 1
    );

    return needJobs;
 }; 

 const addBid = async (_id, _bidder, _cost, _time, _rating,pId, _desc, _image) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.addBid(_id,_bidder,_cost,_time,_rating,pId, _desc, _image);
};

const final_select = async (_id,id,_amt) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.final_select(_id, id, _amt, { value: ethers.utils.parseEther(_amt.toString())});

  return jobData;
};

const getAJob = async (_id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const campaign = await contract.getAJob(_id);

  const job = {
    owner: campaign.owner,
    owner_name: campaign.stringArray[0],
    title: campaign.stringArray[1],
    description: campaign.stringArray[2], 
    twitter: campaign.stringArray[3],
    email: campaign.stringArray[4],
    instagram: campaign.stringArray[5],
    linkedIn: campaign.stringArray[6],
    com_address: campaign.stringArray[7],
    com_desc: campaign.stringArray[8],
    deadline: campaign.intArray[0].toNumber(),
    expected_time: ethers.utils.formatEther(campaign.intArray[1].toString())*1000000000000000000,
    expected_cost: ethers.utils.formatEther(campaign.intArray[2].toString())*1000000000000000000,
    req_skills: campaign.req_skills,
    image:campaign.stringArray[9],
    _id: campaign.stringArray[10],
    category:campaign.category,
    bidders:campaign.bidders,
    pId: ethers.utils.formatEther(campaign.pId.toString())*1000000000000000000,
    visible: ethers.utils.formatEther(campaign.visible.toString())*1000000000000000000,
    responses: campaign.resp,
    asks: campaign.ask,
    totalAsk: ethers.utils.formatEther(campaign.totalAsks.toString())*1000000000000000000,
    final_amount: ethers.utils.formatEther(campaign.final_amount.toString())*1000000000000000000,
    final_selection: ethers.utils.formatEther(campaign.final_selection.toString())*1000000000000000000,
    location: campaign.stringArray[11],
    finished: ethers.utils.formatEther(campaign.finished.toString())*1000000000000000000,
  };

  return job;
};

const getProfile = async (_id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const campaign = await contract.getProfile(_id);

  const profiles = {
    developer: campaign.developer,
    name: campaign.stringArray[0],
    description: campaign.stringArray[1],
    category: campaign.stringArray[2],
    twitter: campaign.stringArray[3],
    email: campaign.stringArray[4],
    instagram: campaign.stringArray[5],
    linkedIn: campaign.stringArray[6],
    github: campaign.stringArray[7],
    rating: ethers.utils.formatEther(campaign.rating.toString())*1000000000000000000,
    exp_title: campaign.exp_title,
    exp_desc: campaign.exp_desc,
    exp_duration: campaign.exp_duration,
    pro_title: campaign.pro_title,
    pro_desc: campaign.pro_desc, 
    pro_platform: campaign.pro_platform,
    skills:campaign.skills,
    _id:campaign.stringArray[9],
    image:campaign.stringArray[8],
    pId: ethers.utils.formatEther(campaign.pId.toString())*1000000000000000000,
    engaged: ethers.utils.formatEther(campaign.engaged.toString())*1000000000000000000,
  };

  return profiles;
};


const getAllProfiles = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.getAllProfiles();

  const AllJobs = jobData.map((campaign, i) => ({
    developer: campaign.developer,
    name: campaign.stringArray[0],
    description: campaign.stringArray[1],
    category: campaign.stringArray[2],
    twitter: campaign.stringArray[3],
    email: campaign.stringArray[4],
    instagram: campaign.stringArray[5],
    linkedIn: campaign.stringArray[6],
    github: campaign.stringArray[7],
    rating: ethers.utils.formatEther(campaign.rating.toString())*1000000000000000000,
    exp_title: campaign.exp_title,
    exp_desc: campaign.exp_desc,
    exp_duration: campaign.exp_duration,
    pro_title: campaign.pro_title,
    pro_desc: campaign.pro_desc,
    pro_platform: campaign.pro_platform,
    image:campaign.stringArray[8],
    _id:campaign.stringArray[9],
    engaged: ethers.utils.formatEther(campaign.engaged.toString())*1000000000000000000,
    pId:i
  }));

  return AllJobs;
};


const getCurrProfile = async (_id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.getAllProfiles();

  const AllJobs = jobData.map((campaign, i) => ({
    developer: campaign.developer,
    name: campaign.stringArray[0],
    description: campaign.stringArray[1],
    category: campaign.stringArray[2],
    twitter: campaign.stringArray[3],
    email: campaign.stringArray[4],
    instagram: campaign.stringArray[5],
    linkedIn: campaign.stringArray[6],
    github: campaign.stringArray[7],
    rating: ethers.utils.formatEther(campaign.rating.toString())*1000000000000000000,
    exp_title: campaign.exp_title,
    exp_desc: campaign.exp_desc,
    exp_duration: campaign.exp_duration,
    pro_title: campaign.pro_title,
    pro_desc: campaign.pro_desc,
    pro_platform: campaign.pro_platform,
    image:campaign.stringArray[8],
    _id:campaign.stringArray[9],
    engaged: ethers.utils.formatEther(campaign.engaged.toString())*1000000000000000000,
    pId: ethers.utils.formatEther(campaign.pId.toString())*1000000000000000000,
  }));

  const currProfile = AllJobs.filter(
    (pro) => pro._id === _id
  );

  return currProfile;
};


const rate = async (_id,_rating) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.rate(_id, _rating);

  return jobData;
};


const makeAsk = async (_id,_mess) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.makeAsk(_id, _mess);
};

const makeFreeResponse = async (_id,_resp,_addr,_amt) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.makeResponse(_id, _resp,_addr,_amt);
};

const getMyActiveJobs = async (p_Id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.getJobs();

  const AllJobs = jobData.map((campaign, i) => ({
    owner: campaign.owner,
    owner_name: campaign.stringArray[0],
    title: campaign.stringArray[1],
    description: campaign.stringArray[2],
    linkedIn: campaign.stringArray[3],
    twitter: campaign.stringArray[4],
    instagram: campaign.stringArray[5],
    email: campaign.stringArray[6],
    company_address: campaign.stringArray[7],
    company_desc: campaign.stringArray[8],
    deadline: campaign.intArray[0].toNumber(),
    expected_time: ethers.utils.formatEther(campaign.intArray[1].toString())*1000000000000000000,
    expected_cost: ethers.utils.formatEther(campaign.intArray[2].toString())*1000000000000000000,
    bidders:campaign.bidders,
    image:campaign.stringArray[9],
    _id: campaign.stringArray[10],
    category:campaign.category,
    pId: ethers.utils.formatEther(campaign.pId.toString())*1000000000000000000,
    visible: ethers.utils.formatEther(campaign.visible.toString())*1000000000000000000,
    responses: campaign.resp,
    asks: campaign.ask,
    totalAsk: ethers.utils.formatEther(campaign.totalAsks.toString())*1000000000000000000,
    final_amount: ethers.utils.formatEther(campaign.final_amount.toString())*1000000000000000000,
    final_selection: ethers.utils.formatEther(campaign.final_selection.toString())*1000000000000000000,
    location: campaign.stringArray[11],
    finished: ethers.utils.formatEther(campaign.finished.toString())*1000000000000000000,
  }));

  const noJobs = AllJobs.filter(
    (project) => project?.final_selection === p_Id
  );

  const needJobs = noJobs.filter(
    (project) => project.finished=== 0
  );

  return needJobs;
}; 

const getMyFinishedJobs = async (p_Id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.getJobs();

  const AllJobs = jobData.map((campaign, i) => ({
    owner: campaign.owner,
    owner_name: campaign.stringArray[0],
    title: campaign.stringArray[1],
    description: campaign.stringArray[2],
    linkedIn: campaign.stringArray[3],
    twitter: campaign.stringArray[4],
    instagram: campaign.stringArray[5],
    email: campaign.stringArray[6],
    company_address: campaign.stringArray[7],
    company_desc: campaign.stringArray[8],
    deadline: campaign.intArray[0].toNumber(),
    expected_time: ethers.utils.formatEther(campaign.intArray[1].toString())*1000000000000000000,
    expected_cost: ethers.utils.formatEther(campaign.intArray[2].toString())*1000000000000000000,
    bidders:campaign.bidders,
    image:campaign.stringArray[9],
    _id: campaign.stringArray[10],
    category:campaign.category,
    pId: ethers.utils.formatEther(campaign.pId.toString())*1000000000000000000,
    visible: ethers.utils.formatEther(campaign.visible.toString())*1000000000000000000,
    responses: campaign.resp,
    asks: campaign.ask,
    totalAsk: ethers.utils.formatEther(campaign.totalAsks.toString())*1000000000000000000,
    final_amount: ethers.utils.formatEther(campaign.final_amount.toString())*1000000000000000000,
    final_selection: ethers.utils.formatEther(campaign.final_selection.toString())*1000000000000000000,
    location: campaign.stringArray[11],
    finished: ethers.utils.formatEther(campaign.finished.toString())*1000000000000000000,
  }));

  const noJobs = AllJobs.filter(
    (project) => project?.final_selection === p_Id
  );

  const needJobs = noJobs.filter(
    (project) => project.finished=== 1
  );

  return needJobs;
};

const getCompanyActiveJobs = async (_id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.getJobs();

  const AllJobs = jobData.map((campaign, i) => ({
    owner: campaign.owner,
    owner_name: campaign.stringArray[0],
    title: campaign.stringArray[1],
    description: campaign.stringArray[2],
    linkedIn: campaign.stringArray[3],
    twitter: campaign.stringArray[4],
    instagram: campaign.stringArray[5],
    email: campaign.stringArray[6],
    company_address: campaign.stringArray[7],
    company_desc: campaign.stringArray[8],
    deadline: campaign.intArray[0].toNumber(),
    expected_time: ethers.utils.formatEther(campaign.intArray[1].toString())*1000000000000000000,
    expected_cost: ethers.utils.formatEther(campaign.intArray[2].toString())*1000000000000000000,
    bidders:campaign.bidders,
    image:campaign.stringArray[9],
    _id: campaign.stringArray[10],
    category:campaign.category,
    pId: ethers.utils.formatEther(campaign.pId.toString())*1000000000000000000,
    visible: ethers.utils.formatEther(campaign.visible.toString())*1000000000000000000,
    responses: campaign.resp,
    asks: campaign.ask,
    totalAsk: ethers.utils.formatEther(campaign.totalAsks.toString())*1000000000000000000,
    final_amount: ethers.utils.formatEther(campaign.final_amount.toString())*1000000000000000000,
    final_selection: ethers.utils.formatEther(campaign.final_selection.toString())*1000000000000000000,
    location: campaign.stringArray[11],
    finished: ethers.utils.formatEther(campaign.finished.toString())*1000000000000000000,
  }));

  const noJobs = AllJobs.filter(
    (project) => project?._id === _id
  );

  const needJobs = noJobs.filter(
    (project) => project.finished=== 0
  );

  return needJobs;
}; 

const getCompanyFinishedJobs = async (_id) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xe88617fE2B380b397400B66e95545c827BD84726",
    CampaignFactory.abi,
    signer
  );

  const jobData = await contract.getJobs();

  const AllJobs = jobData.map((campaign, i) => ({
    owner: campaign.owner,
    owner_name: campaign.stringArray[0],
    title: campaign.stringArray[1],
    description: campaign.stringArray[2],
    linkedIn: campaign.stringArray[3],
    twitter: campaign.stringArray[4],
    instagram: campaign.stringArray[5],
    email: campaign.stringArray[6],
    company_address: campaign.stringArray[7],
    company_desc: campaign.stringArray[8],
    deadline: campaign.intArray[0].toNumber(),
    expected_time: ethers.utils.formatEther(campaign.intArray[1].toString())*1000000000000000000,
    expected_cost: ethers.utils.formatEther(campaign.intArray[2].toString())*1000000000000000000,
    bidders:campaign.bidders,
    image:campaign.stringArray[9],
    _id: campaign.stringArray[10],
    category:campaign.category,
    pId: ethers.utils.formatEther(campaign.pId.toString())*1000000000000000000,
    visible: ethers.utils.formatEther(campaign.visible.toString())*1000000000000000000,
    responses: campaign.resp,
    asks: campaign.ask,
    totalAsk: ethers.utils.formatEther(campaign.totalAsks.toString())*1000000000000000000,
    final_amount: ethers.utils.formatEther(campaign.final_amount.toString())*1000000000000000000,
    final_selection: ethers.utils.formatEther(campaign.final_selection.toString())*1000000000000000000,
    location: campaign.stringArray[11],
    finished: ethers.utils.formatEther(campaign.finished.toString())*1000000000000000000,
  }));

  const noJobs = AllJobs.filter(
    (project) => project?._id === _id
  );

  const needJobs = noJobs.filter(
    (project) => project.finished=== 1
  );

  return needJobs;
};

  return (
    <StateContext.Provider
      value={{
        address,
        connect,
        contract,
        getProjects,
        getUserProjects,
        getActiveProjects,
        donate,
        getDonations,
        getBalance,
        getInvestmentProjects,
        deleteProject: delProject,
        getSearchProjects,
        getCategoryProjects,
        abort,
        getFavouriteProjects,
        withdraw,
        makeUpdate,
        makeResponse,


        address,
        connect,
        contract,
        getJobs,
        getAJob,
        addBid,
        final_select,
        getProfile,
        getAllProfiles,
        getCurrProfile,
        makeAsk,
        makeFreeResponse,
        rate,
        getMyActiveJobs,
        getMyFinishedJobs,
        getCompanyActiveJobs,
        getCompanyFinishedJobs
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
