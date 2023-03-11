import { ethers } from "ethers"
import owner from './abis/owner.json'
import updateBalance from './abis/updateBalance.json'
import lsEth from './abis/tokenLsETH.json'
import veLSD from './abis/tokenVELSD.json'

const getContracts = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const ownerContract = new ethers.Contract(owner.address, owner.abi, provider)
  const balanceContract = new ethers.Contract(updateBalance.address, updateBalance.abi, provider)
  const lsEthContract = new ethers.Contract(lsEth.address, lsEth.abi, provider)
  const veLSDContract = new ethers.Contract(veLSD.address, veLSD.abi, provider)

  return { ownerContract, balanceContract, lsEthContract, veLSDContract }
}

const getOwnerContract = async () => {
  // get owner contract
  const { ownerContract } = getContracts()

  try {
    // get Aprs
    const lsdApr = await ownerContract.getApy()
    const lsdRPApr = await ownerContract.getRPApy()
    const lsdLIDOApr = await ownerContract.getLIDOApy()
    const lsdSWISEApr = await ownerContract.getSWISEApy()

    const lsdAprUnit = await ownerContract.getApyUnit()

    const apr = Number(lsdApr) / (10 ** (Number(lsdAprUnit) - 2))
    const rpApr = Number(lsdRPApr) / (10 ** (Number(lsdAprUnit) - 2))
    const lidoApr = Number(lsdLIDOApr) / (10 ** (Number(lsdAprUnit) - 2))
    const swiseApr = Number(lsdSWISEApr) / (10 ** (Number(lsdAprUnit) - 2))

    // get multiplier
    const lsdMultiplier = await ownerContract.getMultiplier()
    const lsdMultiplierUnit = await ownerContract.getMultiplierUnit()
    const multiplier = Number(lsdMultiplier) / (10 ** (Number(lsdMultiplierUnit) - 2))

    // get deposit enabled
    const depositEnabled = await ownerContract.getDepositEnabled()

    // get isLock
    const isLock = await ownerContract.getIsLock()

    // get owner
    const owner = await ownerContract.owner()

    // get minimum deposit
    const minimumDepositAmount = await ownerContract.getMinimumDepositAmount()
    const minimumAmount = Number(minimumDepositAmount)

    return { apr, rpApr, lidoApr, swiseApr, multiplier, depositEnabled, isLock, minimumAmount, owner }
  } catch (error) {
    console.log(error)
  }
}

const getUpdateBalanceContract = async () => {
  const { balanceContract } = getContracts()

  try {
    // get eth balance
    const ethAmount = await balanceContract.getVirtualETHBalance()
    const stakedETH = Number(ethers.utils.formatEther(ethAmount.toString()))

    return stakedETH
  } catch (error) {
    console.log(error)
  }

}

const getTokenLsETHContract = async () => {
  const { lsEthContract } = getContracts()

  try {
    // getExchangeRate 
    const lsdExchangeRate = await lsEthContract.getExchangeRate()
    const exchangeRate = ethers.utils.formatEther(lsdExchangeRate.toString())

    // getTotalSupply
    const lsdTotalSupply = await lsEthContract.totalSupply()
    const totalSupply = Number(ethers.utils.formatEther(lsdTotalSupply.toString()))

    return { exchangeRate, totalSupply }
  }
  catch (error) {
    console.log(error)
  }
}

const getTokenVeLSDContract = async () => {
  const { veLSDContract } = getContracts()

  try {
    // getTotalSupply
    const veLsdTotalSupply = await veLSDContract.totalSupply()
    const totalSupply = Number(ethers.utils.formatEther(veLsdTotalSupply.toString()))

    return totalSupply
  } catch (error) {
    console.log(error)
  }
}

export {
  getOwnerContract,
  getUpdateBalanceContract,
  getTokenLsETHContract,
  getTokenVeLSDContract,
}

