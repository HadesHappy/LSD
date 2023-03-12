import { ethers } from 'ethers'
import owner from './abis/owner.json'

const getContract = () => {
  const walletProvider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = walletProvider.getSigner()
  const contract = new ethers.Contract(owner.address, owner.abi, signer)
  return contract
}

const setApy = async (amount) => {
  try {
    const contract = getContract()
    const tx = await contract.setApy(amount)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setLidoApy = async (amount) => {
  try {
    const contract = getContract()
    const tx = await contract.setLIDOApy(amount)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setRpApy = async (amount) => {
  try {
    const contract = getContract()
    const tx = await contract.setRPApy(amount)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setSwiseApy = async (amount) => {
  try {
    const contract = getContract()
    const tx = await contract.setSWISEApy(amount)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setApyUnit = async (amount) => {
  try {
    const contract = getContract()
    const tx = await contract.setApyUnit(amount)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setMinimumDepositAmount = async (amount) => {
  try {
    const contract = getContract()
    const tx = await contract.setMinimumDepositAmount(ethers.utils.parseEther(amount.toString()))
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setDepositEnabled = async (enabled) => {
  try {
    const contract = getContract()
    const tx = await contract.setDepositEnabled(enabled)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setIsLock = async (lock) => {
  try {
    const contract = getContract()
    const tx = await contract.setIsLock(lock)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setMultiplier = async (amount) => {
  try {
    const contract = getContract()
    const tx = await contract.setMultiplier(amount)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

const setMultiplierUnit = async (amount) => {
  try {
    const contract = getContract()
    const tx = await contract.setMultiplierUnit(amount)
    await tx.wait()
  } catch (error) {
    console.log(error)
  }
}

export {
  setApy,
  setLidoApy,
  setRpApy,
  setSwiseApy,
  setApyUnit,
  setMinimumDepositAmount,
  setDepositEnabled,
  setIsLock,
  setMultiplier,
  setMultiplierUnit,
}