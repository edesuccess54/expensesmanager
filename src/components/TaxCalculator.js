import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./TaxCalculator.css";

export default function TaxCalculator() {

    const [grossSalary, setGrossSalary] = useState('');

    const [nssfContribution] = useState(1080);
    const [nhifContribution] = useState(1400);

    const [taxableIncome, setTaxableIncome] = useState(0);
 
    const [personalRelief] = useState(2400);
    const [insuranceRelief] = useState(210);

    const [taxBeforeRelief, setTaxBeforeRelief] = useState(0);
    const [paye, setPaye] = useState(0);
    const [netPay, SetNetPay] = useState(0.00);


    function taxHandler() {
        const totalContributions = grossSalary - (Number(nssfContribution) + Number(nhifContribution));

        // updating taxableIncome state 
        setTaxableIncome(totalContributions);
        
        // default values from kenyas' PAYE 
        const firstAmount = 24000;
        const Nextamount = 8333;

        // 10 percent on the first 24000 and 25 percent on the next 8333
        const firstPercent = firstAmount * 0.1;
        const secondPercent = Nextamount * 0.25;

        // suming the total default kenya values above 
        const tototalFirstSecondAmount = firstAmount + Nextamount;
        console.log('total first and second, ' + tototalFirstSecondAmount);

        // const aboveAmount = (Number(taxableIncome) - tototalFirstSecondAmount);
        const aboveAmount = (Number(taxableIncome) - Number(tototalFirstSecondAmount)) * 0.30;
        console.log('above '+ aboveAmount)

        const totalTax = parseInt(firstPercent) + parseInt(secondPercent) + parseInt(aboveAmount);
        const totalRelief = Number(personalRelief) + Number(insuranceRelief);

        setTaxBeforeRelief(totalTax); 
        
        // substracting reliefs from the total tax 
        const getPaye = totalTax - totalRelief;
        // updating PAYE state 
        setPaye(getPaye);
        // subtracting paye from gross salary to get net pay
        const getNetPay = grossSalary - getPaye;
        // updating netpay state
        SetNetPay(getNetPay) ;

    }



    useEffect(() => {
        if(grossSalary.length != '0') {
            taxHandler();
        }
        
    }, [grossSalary, taxHandler])


  return (
    <div className="taxcalculator">
       <div className="form-wrapper">
            <form>
                <label htmlFor="Salary">Gross Salary</label>
                <input 
                    type="number"
                    onChange = {(e) => setGrossSalary(e.target.value)}
                    value = {grossSalary}
                 />
            </form>

            <div className="content-wrapper">
                <div className="netPay">
                    <p>Net pay</p>
                    <p>Ksh {netPay}</p>
                </div>

                <ul>
                    <li>
                        <span>NSSF Contribution</span>
                        <span>Ksh {nssfContribution}</span>
                    </li>

                    <li>
                        <span>Taxable Income</span>
                        <span>Ksh {taxableIncome}</span>
                    </li>

                    <li>
                        <span>Tax Before Relief</span>
                        <span>Ksh {taxBeforeRelief}</span>
                    </li>

                    <li>
                        <span>Personal Relief</span>
                        <span>Ksh {personalRelief}</span>
                    </li>

                    <li>
                        <span>Insurance/NHIF Relief</span>
                        <span>Ksh {insuranceRelief}</span>
                    </li>

                    <li>
                        <span>PAYE</span>
                        <span>Ksh {paye}</span>
                    </li>

                    <li>
                        <span>NHIF Contribution</span>
                        <span>Ksh {nhifContribution}</span>
                    </li>
                </ul>
                <div className="bottom-link">
                    <Link to = "/billManager">manage bills</Link>
                </div>
            </div>
       </div>
    </div>
  )
}
