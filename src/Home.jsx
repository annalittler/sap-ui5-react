import React from "react";
import {
  Card,
  CardHeader,
  Text,
  Avatar,
  ShellBar,
  ShellBarItem,
  List,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  Title,
  TitleLevel,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/line-chart.js";
import "@ui5/webcomponents-icons/dist/bar-chart.js";
import "@ui5/webcomponents-icons/dist/radar-chart";
import "@ui5/webcomponents-icons/dist/add.js";
import "@ui5/webcomponents-icons/dist/list.js";
import "@ui5/webcomponents-icons/dist/table-view.js";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import dataset from "./Data.json";
import tableData from "./List.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [toggleCharts, setToggleCharts] = useState("line-chart");
  const [loading, setLoading] = useState(false);

  const switchToChart =
    toggleCharts === "line-chart" ? "Bar Chart" : "Line Chart";

  const contentTitle = true;

  const handleToggle = () => {
    if (toggleCharts === "line-chart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("bar-chart");
      }, 1000);
    }
    if (toggleCharts === "bar-chart") {
      setToggleCharts("line-chart");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const tableColumns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Friend's Name",
      accessor: "friend.name",
    },
    {
      Header: "Friend's Age",
      accessor: "friend.age",
    },
  ];

  const tableData = new Array(250).fill(null).map((_, index) => {
    return {
      name: `name${index + 1}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index + 1}`,
        age: Math.floor(Math.random() * 100),
      },
    };
  });

  const navigate = useNavigate();
  const handleProgressHeaderClick = () => {
    navigate("/detail");
  };

  return (
    <>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={spacing.sapUiContentPadding}
      >
        <Card
          style={{
            width: "300px",
            ...spacing.sapUiContentPadding,
          }}
          header={
            <CardHeader
              titleText="Stock Prices"
              subtitleText={`Click here to switch to ${switchToChart}`}
              interactive
              onClick={handleToggle}
              avatar={
                <Icon
                  name={
                    toggleCharts === "line-chart" ? "line-chart" : "bar-chart"
                  }
                />
              }
            />
          }
        >
          <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
          {toggleCharts === "line-chart" ? (
            <LineChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dataset={dataset}
              loading={loading}
            />
          ) : (
            <BarChart
              dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data" }]}
              dataset={dataset}
              loading={loading}
            />
          )}
        </Card>
        <Card
          style={{
            width: "300px",
            ...spacing.sapUiContentPadding,
          }}
          header={
            <CardHeader
              titleText="Progress"
              subtitleText="List"
              avatar={<Icon name="list" />}
              interactive
              onClick={handleProgressHeaderClick}
            />
          }
        >
          <List>
            <StandardListItem
              additionalText="finished"
              additionalTextState={ValueState.Success}
            >
              Activity 1
            </StandardListItem>
            <StandardListItem
              additionalText="failed"
              additionalTextState={ValueState.Error}
            >
              Activity 2
            </StandardListItem>
            <StandardListItem
              style={{ height: "80px" }}
              additionalText="in progress"
              additionalTextState={ValueState.Warning}
            >
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level={TitleLevel.H5}>Activity 3</Title>
                <ProgressIndicator value={89} valueState={ValueState.Success} />
              </FlexBox>
            </StandardListItem>
            <StandardListItem
              style={{ height: "80px" }}
              additionalText="in progress"
              additionalTextState={ValueState.Warning}
            >
              <FlexBox direction={FlexBoxDirection.Column}>
                <Title level={TitleLevel.H5}>Activity 4</Title>
                <ProgressIndicator value={5} valueState={ValueState.Error} />
              </FlexBox>
            </StandardListItem>
          </List>
        </Card>
        <Card
          style={{
            maxWidth: "900px",
            ...spacing.sapUiContentPadding,
          }}
          header={
            <CardHeader
              titleText="Analytical Table"
              avatar={<Icon name="table-view" />}
            />
          }
        >
          <AnalyticalTable
            data={tableData}
            columns={tableColumns}
            visibleRows={10}
            minRows={1}
          />
        </Card>
      </FlexBox>
    </>
  );
}
