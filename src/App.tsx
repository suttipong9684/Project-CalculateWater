import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { Theme } from "./Theme";

function App() {
  type Inputs = {
    weight: number;
  };

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [water, setWater] = useState<number>(0);
  const [theme, setTheme] = useState<string>("light");

  const calculate = (event: any) => {
    let resault = (event.weight * 2.2 * 30) / 2;
    setWater(resault);

    reset();
  };

  return (
    <>
      <main className={theme}>
        <div className="container">
          <section className="header">
            <div className="header-info">
              <h1>ควรดื่มน้ำวันล่ะเท่าไร ?</h1>
            </div>
            <h2>
              จำนวนน้ำที่ต้องดื่มต่อวัน
              {` ${water.toFixed(2)} มล. หรือ ${Number(water / 1000).toFixed(
                2
              )} ลิตร`}
            </h2>

            <form className="form-control" onSubmit={handleSubmit(calculate)}>
              <label>
                <p>น้ำหนักตัว :</p>
                <input
                  placeholder="กรุณากรอกน้ำหนัก"
                  required
                  {...register("weight")}
                />
              </label>
              <input className="btn" type="submit" value={"คำนวณ"} />
            </form>
          </section>

          <Theme theme={theme} setTheme={setTheme} />
        </div>
      </main>
    </>
  );
}

export default App;
