import React, { useEffect, useState, useCallback } from "react";
import { getAllProducts } from "../../services/products";
import classes from "./Action.module.scss";
import Timer from "../Timer/Timer";
import PropTypes from "prop-types";
import ActionSlider from "./ActionSlider/ActionSlider"

const Action = (props) => {
  const { timer } = props;
  const [action, setAction] = useState([]);
  const [actionTime, setActionTime] = useState();

  const getCollection = useCallback(async () => {
    let actionArr = [];
    const response = await getAllProducts();
    response.map((item) => {
      if (item.salePrice) {
        actionArr.push(item);
      }
      return actionArr;
    });
    setAction(actionArr);
  }, [setAction]);

  useEffect(() => {
    getCollection();
  });

  const getActionTime = useCallback(() => {
    if (new Date(timer).getTime() > new Date().getTime()) {
      setActionTime(true);
    } else {
      setActionTime(false);
    }
  }, [timer]);

  useEffect(() => {
    getActionTime();
  });

  return (
    <React.Fragment>
      {action.length !== 0 && actionTime ?
        <div className={classes.action_block}>
          <div className={classes.action_block__container}>
            <div className={classes.timer}>
              <h2>Flash Sale</h2>
              <p>
                You have a unique opportunity to buy best manga on lover price. Hurry up, action is valid for a limited time.
              </p>
              <Timer time={timer} />
            </div>

            <ActionSlider actionData={action} />
          </div>
        </div>
        :
        ""
      }
    </React.Fragment>
  );
};

Action.propTypes = {
  timer: PropTypes.string,
};

export default Action;
