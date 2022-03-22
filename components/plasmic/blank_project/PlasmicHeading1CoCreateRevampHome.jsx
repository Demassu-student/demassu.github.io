// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vrXCB8dxA4nVS6MjHefASJ
// Component: 0fXKOlQr_Q
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: vrXCB8dxA4nVS6MjHefASJ/projectcss
import sty from "./PlasmicHeading1CoCreateRevampHome.module.css"; // plasmic-import: 0fXKOlQr_Q/css
import ArrowUpRightIcon from "./icons/PlasmicIcon__ArrowUpRight"; // plasmic-import: 2pP3BHFtR5c/icon

export const PlasmicHeading1CoCreateRevampHome__VariantProps = new Array();

export const PlasmicHeading1CoCreateRevampHome__ArgProps = new Array();

function PlasmicHeading1CoCreateRevampHome__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        sty.root
      )}
      component={Link}
      href={"/pages/cocreate"}
      platform={"nextjs"}
      target={"_blank"}
    >
      <div
        data-plasmic-name={"heading"}
        data-plasmic-override={overrides.heading}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.heading
        )}
      >
        {"Jenius CoCreate Revamp Competition"}
      </div>

      <div
        data-plasmic-name={"iconWrap"}
        data-plasmic-override={overrides.iconWrap}
        className={classNames(projectcss.all, sty.iconWrap)}
      >
        <ArrowUpRightIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </p.PlasmicLink>
  );
}

const PlasmicDescendants = {
  root: ["root", "heading", "iconWrap", "svg"],
  heading: ["heading"],
  iconWrap: ["iconWrap", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeading1CoCreateRevampHome__ArgProps,
      internalVariantPropNames: PlasmicHeading1CoCreateRevampHome__VariantProps
    });

    return PlasmicHeading1CoCreateRevampHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeading1CoCreateRevampHome";
  } else {
    func.displayName = `PlasmicHeading1CoCreateRevampHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHeading1CoCreateRevampHome = Object.assign(
  // Top-level PlasmicHeading1CoCreateRevampHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    heading: makeNodeComponent("heading"),
    iconWrap: makeNodeComponent("iconWrap"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicHeading1CoCreateRevampHome
    internalVariantProps: PlasmicHeading1CoCreateRevampHome__VariantProps,
    internalArgProps: PlasmicHeading1CoCreateRevampHome__ArgProps
  }
);

export default PlasmicHeading1CoCreateRevampHome;
/* prettier-ignore-end */
